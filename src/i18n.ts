import * as NextI18Next from 'next-i18next'
import path from 'path'

export default new NextI18Next.default({
  localePath: path.resolve('./public/static/locales')
})

// const NextI18Next = require('next-i18next').default
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
// const path = require('path')

// module.exports = new NextI18Next({
//   otherLanguages: ['de'],
//   localeSubpaths,
//   localePath: path.resolve('./public/static/locales')
// })
