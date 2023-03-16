import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['gitmoji'],
  rules: {
    'footer-leading-blank': [RuleConfigSeverity.Disabled, 'never'],
    'header-max-length': [RuleConfigSeverity.Disabled, 'never', 0],
  },
}

module.exports = Configuration
