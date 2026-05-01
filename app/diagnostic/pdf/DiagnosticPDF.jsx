import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
} from '@react-pdf/renderer'
import { dimensions } from '../data/dimensions'
import { styles, colors, statusMeta, PAGE_W, PAGE_H } from './styles'

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 500 },
    { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 600 },
  ],
})

Font.register({
  family: 'Outfit',
  fonts: [
    { src: '/fonts/Outfit-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Outfit-SemiBold.ttf', fontWeight: 600 },
  ],
})

const STATUS_KEYS = ['embedded', 'working', 'attention']

function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function countByStatus(responses, status) {
  return Object.values(responses).filter((v) => v === status).length
}

// Decorative purple "lens" circles, lifted from the workshop resource.
// Each circle has hand-tuned position/size/opacity to feel placed, not random.
//
// Layout invariant: absolute children whose `y + size` exceeds
// `PAGE_H - paddingBottom` make @react-pdf treat the page as overflowing,
// which triggers a silent relayout onto a fresh page (you get blank pages
// before the rendered content). Keep every circle's bottom edge above the
// page's bottom padding boundary.
function DecoCircles({ palette }) {
  // palette is an array of {x, y, size, color, opacity}
  return (
    <>
      {palette.map((c, i) => (
        <View
          key={i}
          style={[
            styles.decoCircle,
            {
              left: c.x,
              top: c.y,
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
              opacity: c.opacity,
            },
          ]}
        />
      ))}
    </>
  )
}

function PageFooter({ compact = false }) {
  return (
    <View style={styles.footer} fixed>
      <Image
        src="/Mutomorro%20logo%20-%20black.png"
        style={compact ? styles.footerLogoCompact : styles.footerLogo}
      />
      <Text style={styles.footerText}>competence-conduct.org</Text>
    </View>
  )
}

function SummaryStats({ counts }) {
  return (
    <View style={styles.summaryStatsBox}>
      {STATUS_KEYS.map((key, i) => {
        const meta = statusMeta[key]
        return (
          <View key={key} style={styles.summaryStat}>
            {i > 0 ? <Text style={styles.summaryStatDivider}>·</Text> : null}
            <Text style={[styles.summaryStatNumber, { color: meta.colour }]}>
              {counts[key]}
            </Text>
            <Text style={[styles.summaryStatLabel, { color: meta.colour }]}>
              {meta.summary}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

function DimensionCard({ dimension, responses }) {
  const number = String(dimension.id).padStart(2, '0')
  const cardCounts = { embedded: 0, working: 0, attention: 0 }
  dimension.statements.forEach((s) => {
    const v = responses[s.id]
    if (v && cardCounts[v] != null) cardCounts[v] += 1
  })
  const presentStatuses = STATUS_KEYS.filter((k) => cardCounts[k] > 0)

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNumber}>{number}</Text>
        <Text style={styles.cardName}>{dimension.name}</Text>
      </View>

      <View style={styles.cardBody}>
        {dimension.statements.map((s, idx) => {
          const value = responses[s.id]
          const meta = value ? statusMeta[value] : null
          const colour = meta ? meta.colour : colors.warmMid
          const isLast = idx === dimension.statements.length - 1
          return (
            <View
              key={s.id}
              style={[
                isLast ? styles.statementRowLast : styles.statementRow,
                { borderLeftWidth: 3, borderLeftColor: colour, paddingLeft: 9 },
              ]}
            >
              <Text style={styles.statementText}>{s.text}</Text>
            </View>
          )
        })}
      </View>

      <View style={styles.cardFooter}>
        {presentStatuses.map((key, i) => {
          const meta = statusMeta[key]
          return (
            <View key={key} style={{ flexDirection: 'row', alignItems: 'center' }}>
              {i > 0 ? <Text style={styles.cardFooterDivider}>·</Text> : null}
              <Text style={[styles.cardFooterSegment, { color: meta.colour }]}>
                {cardCounts[key]} {meta.summary}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

function ResultsPage({ responses, completedAt }) {
  const counts = {
    embedded: countByStatus(responses, 'embedded'),
    working: countByStatus(responses, 'working'),
    attention: countByStatus(responses, 'attention'),
  }

  const palette = [
    { x: PAGE_W - 110, y: 20, size: 110, color: colors.purplePrimary, opacity: 0.08 },
    { x: PAGE_W - 60, y: 110, size: 60, color: colors.purpleAccent, opacity: 0.08 },
    { x: 10, y: PAGE_H - 150, size: 90, color: colors.purplePrimary, opacity: 0.07 },
  ]

  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <DecoCircles palette={palette} />

      <View style={styles.headerBlock}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.kicker}>COMPETENCE AND CONDUCT STANDARD</Text>
            <Text style={styles.title}>Your culture readiness profile</Text>
            <Text style={styles.dateLine}>Completed {formatDate(completedAt)}</Text>
            <View style={styles.purpleRule} />
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.topRightUrl}>competence-conduct.org</Text>
            <SummaryStats counts={counts} />
            <Text style={styles.countNote}>18 statements · 6 dimensions</Text>
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <DimensionCard dimension={dimensions[0]} responses={responses} />
          <View style={styles.gridCellSpacer} />
          <DimensionCard dimension={dimensions[1]} responses={responses} />
          <View style={styles.gridCellSpacer} />
          <DimensionCard dimension={dimensions[2]} responses={responses} />
        </View>
        <View style={styles.gridRowLast}>
          <DimensionCard dimension={dimensions[3]} responses={responses} />
          <View style={styles.gridCellSpacer} />
          <DimensionCard dimension={dimensions[4]} responses={responses} />
          <View style={styles.gridCellSpacer} />
          <DimensionCard dimension={dimensions[5]} responses={responses} />
        </View>
      </View>

      <PageFooter compact />
    </Page>
  )
}

function MutomorroPage() {
  // Heavier circle composition on right side, evoking the workshop cover
  const palette = [
    { x: PAGE_W - 220, y: 20, size: 220, color: colors.purplePrimary, opacity: 0.10 },
    { x: PAGE_W - 130, y: 170, size: 140, color: colors.purpleAccent, opacity: 0.10 },
    { x: PAGE_W - 260, y: 220, size: 90, color: colors.purplePrimary, opacity: 0.09 },
    { x: PAGE_W - 80, y: 300, size: 80, color: colors.purplePrimary, opacity: 0.10 },
    { x: PAGE_W - 200, y: 330, size: 60, color: colors.purpleAccent, opacity: 0.09 },
  ]

  return (
    <Page size="A4" orientation="landscape" style={styles.mutoPage}>
      <DecoCircles palette={palette} />

      <View style={styles.mutoBlock}>
        <Text style={styles.mutoKicker}>DEVELOPED BY</Text>
        <Text style={styles.mutoName}>Mutomorro</Text>
        <Text style={styles.mutoTagline}>
          We help housing organisations build the cultures they describe in their strategies.
        </Text>
        <View style={styles.mutoRule} />
        <Text style={styles.mutoParagraph}>
          Mutomorro works with housing providers on culture, leadership, and organisational
          development. The Competence and Conduct Standard is one part of a broader conversation
          about what good looks like in social housing — and how to build it deliberately.
        </Text>
        <Text style={styles.mutoParagraph}>
          If your organisation is thinking about culture readiness beyond this diagnostic, the
          States of Vitality assessment offers a deeper look at organisational health across
          multiple dimensions.
        </Text>
      </View>

      <View style={styles.mutoCardsRow}>
        <View style={styles.mutoCard}>
          <Text style={styles.mutoCardKicker}>STATES OF VITALITY</Text>
          <Text style={styles.mutoCardTitle}>A deeper culture and organisational health assessment</Text>
          <Text style={styles.mutoCardBody}>
            For organisations thinking about culture readiness beyond this diagnostic.
          </Text>
          <Text style={styles.mutoCardLink}>mutomorro.com/states-of-vitality</Text>
        </View>
        <View style={styles.mutoCardSpacer} />
        <View style={styles.mutoCard}>
          <Text style={styles.mutoCardKicker}>GET IN TOUCH</Text>
          <Text style={styles.mutoCardTitle}>Talk to us about culture readiness</Text>
          <Text style={styles.mutoCardBody}>
            hello@mutomorro.com
          </Text>
          <Text style={styles.mutoCardLink}>mutomorro.com</Text>
        </View>
      </View>

      <PageFooter />
    </Page>
  )
}

export default function DiagnosticPDF({ responses, completedAt }) {
  return (
    <Document
      title="Culture Readiness Profile"
      author="Mutomorro"
      subject="Competence and Conduct Standard diagnostic results"
    >
      <ResultsPage responses={responses} completedAt={completedAt} />
      <MutomorroPage />
    </Document>
  )
}
