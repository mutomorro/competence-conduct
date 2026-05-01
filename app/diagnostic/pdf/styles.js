import { StyleSheet } from '@react-pdf/renderer'

export const colors = {
  ink: '#0E0F0E',
  inkMuted: '#555555',
  inkFaint: '#999999',
  white: '#FFFFFF',
  purplePrimary: '#9B51E2',
  purpleAccent: '#6366F0',
  purpleOverlap: '#5E3FD3',
  warmLight: '#F6F4EE',
  warmMid: '#E8E3DB',
  green: '#4CAF50',
  amber: '#FF9800',
  red: '#EF5350',
  grey: '#6B7280',
}

export const statusMeta = {
  embedded: { colour: colors.green, label: 'Embedded', summary: 'embedded' },
  working: { colour: colors.amber, label: 'Working on it', summary: 'working on it' },
  attention: { colour: colors.red, label: 'Needs attention', summary: 'needs attention' },
}

export const PAGE_W = 842
export const PAGE_H = 595
export const PAGE_MARGIN_X = 40
export const PAGE_MARGIN_Y = 40

export const styles = StyleSheet.create({
  // ---------- Page shell ----------
  page: {
    paddingTop: PAGE_MARGIN_Y,
    paddingBottom: PAGE_MARGIN_Y,
    paddingLeft: PAGE_MARGIN_X,
    paddingRight: PAGE_MARGIN_X,
    fontFamily: 'Inter',
    color: colors.ink,
    backgroundColor: colors.warmLight,
  },

  // ---------- Header (page 1) ----------
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    flexDirection: 'column',
    flex: 1,
  },
  kicker: {
    fontFamily: 'Outfit',
    fontSize: 9,
    fontWeight: 600,
    color: colors.purpleAccent,
    letterSpacing: 1.6,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: 400,
    color: colors.ink,
    letterSpacing: -0.4,
    lineHeight: 1.1,
  },
  dateLine: {
    fontFamily: 'Outfit',
    fontSize: 10,
    color: colors.inkMuted,
    marginTop: 6,
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  topRightUrl: {
    fontFamily: 'Outfit',
    fontSize: 9,
    color: colors.inkFaint,
    marginBottom: 12,
  },
  summaryStatsBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
  },
  summaryStat: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  summaryStatNumber: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 600,
    marginRight: 5,
    letterSpacing: -0.3,
  },
  summaryStatLabel: {
    fontFamily: 'Outfit',
    fontSize: 10,
  },
  summaryStatDivider: {
    fontFamily: 'Outfit',
    fontSize: 10,
    color: colors.warmMid,
    marginHorizontal: 10,
  },
  countNote: {
    fontFamily: 'Outfit',
    fontSize: 9,
    color: colors.inkFaint,
    marginTop: 6,
  },

  // Subtle purple rule under header
  purpleRule: {
    height: 2,
    width: 36,
    backgroundColor: colors.purpleAccent,
    marginTop: 12,
  },

  headerBlock: {
    marginBottom: 18,
  },

  // ---------- Grid ----------
  grid: {
    flexDirection: 'column',
    flex: 1,
  },
  gridRow: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 12,
  },
  gridRowLast: {
    flexDirection: 'row',
    flex: 1,
  },
  gridCellSpacer: {
    width: 12,
  },

  // ---------- Dimension card ----------
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.warmMid,
    borderRadius: 6,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: colors.warmLight,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.warmMid,
  },
  cardNumber: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 500,
    color: colors.purpleAccent,
    marginRight: 7,
    letterSpacing: -0.2,
  },
  cardName: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: 500,
    color: colors.ink,
    flex: 1,
    letterSpacing: -0.1,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'column',
  },
  statementRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.warmMid,
    minHeight: 38,
  },
  statementRowLast: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    minHeight: 38,
  },
  statementText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 8.5,
    color: colors.ink,
    lineHeight: 1.4,
  },
  cardFooter: {
    backgroundColor: colors.warmLight,
    borderTopWidth: 0.5,
    borderTopColor: colors.warmMid,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterSegment: {
    fontFamily: 'Outfit',
    fontSize: 8,
  },
  cardFooterDivider: {
    fontFamily: 'Outfit',
    fontSize: 8,
    color: colors.warmMid,
    marginHorizontal: 5,
  },

  // ---------- Footer ----------
  footer: {
    position: 'absolute',
    bottom: 16,
    left: PAGE_MARGIN_X,
    right: PAGE_MARGIN_X,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Outfit',
    fontSize: 8,
    color: colors.inkFaint,
  },
  footerLogo: {
    width: 110,
    height: 16,
  },
  footerLogoCompact: {
    width: 66,
    height: 10,
  },

  // ---------- Decorative circles ----------
  // We'll position these absolutely via inline style; this is the base style.
  decoCircle: {
    position: 'absolute',
    borderRadius: 9999,
  },

  // ---------- Mutomorro page ----------
  mutoPage: {
    paddingTop: 56,
    paddingBottom: 40,
    paddingLeft: 56,
    paddingRight: 56,
    fontFamily: 'Inter',
    color: colors.ink,
    backgroundColor: colors.warmLight,
  },
  mutoBlock: {
    maxWidth: 460,
  },
  mutoKicker: {
    fontFamily: 'Outfit',
    fontSize: 10,
    fontWeight: 600,
    color: colors.purpleAccent,
    letterSpacing: 1.8,
    marginBottom: 16,
  },
  mutoName: {
    fontFamily: 'Inter',
    fontSize: 44,
    fontWeight: 500,
    color: colors.ink,
    letterSpacing: -0.8,
    lineHeight: 1.05,
    marginBottom: 16,
  },
  mutoTagline: {
    fontFamily: 'Outfit',
    fontSize: 14,
    color: colors.ink,
    lineHeight: 1.5,
    marginBottom: 20,
    maxWidth: 420,
  },
  mutoRule: {
    height: 1,
    width: 56,
    backgroundColor: colors.purpleAccent,
    marginBottom: 22,
  },
  mutoParagraph: {
    fontFamily: 'Outfit',
    fontSize: 11,
    color: colors.inkMuted,
    lineHeight: 1.65,
    marginBottom: 14,
    maxWidth: 460,
  },

  // Callout cards on Mutomorro page (workshop "A STARTING POINT" style)
  mutoCardsRow: {
    flexDirection: 'row',
    marginTop: 16,
    maxWidth: 620,
  },
  mutoCardSpacer: {
    width: 18,
  },
  mutoCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderLeftWidth: 3,
    borderLeftColor: colors.purpleAccent,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  mutoCardKicker: {
    fontFamily: 'Outfit',
    fontSize: 9,
    fontWeight: 600,
    color: colors.purpleAccent,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  mutoCardTitle: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 500,
    color: colors.ink,
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  mutoCardBody: {
    fontFamily: 'Outfit',
    fontSize: 10,
    color: colors.inkMuted,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  mutoCardLink: {
    fontFamily: 'Outfit',
    fontSize: 10,
    color: colors.purpleAccent,
  },
})
