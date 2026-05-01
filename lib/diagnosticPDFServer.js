import path from 'node:path'
import { createElement } from 'react'

const PUBLIC_DIR = path.join(process.cwd(), 'public')

const SERVER_ASSETS = {
  logoSrc: path.join(PUBLIC_DIR, 'Mutomorro logo - black.png'),
  fonts: {
    interRegular: path.join(PUBLIC_DIR, 'fonts/Inter-Regular.ttf'),
    interSemiBold: path.join(PUBLIC_DIR, 'fonts/Inter-SemiBold.ttf'),
    outfitRegular: path.join(PUBLIC_DIR, 'fonts/Outfit-Regular.ttf'),
    outfitSemiBold: path.join(PUBLIC_DIR, 'fonts/Outfit-SemiBold.ttf'),
  },
}

export async function renderDiagnosticPDFBuffer({ responses, completedAt }) {
  const [{ renderToBuffer }, { default: DiagnosticPDF }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('../app/diagnostic/pdf/DiagnosticPDF.jsx'),
  ])

  const element = createElement(DiagnosticPDF, {
    responses,
    completedAt,
    assets: SERVER_ASSETS,
  })

  return renderToBuffer(element)
}
