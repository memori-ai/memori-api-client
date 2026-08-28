import { GovernanceRule, GovernanceRuleCategory } from '../types';

export const unwrapGovernanceRule = (response: {
  governanceRule?: GovernanceRule;
  rule?: GovernanceRule;
}): GovernanceRule | undefined => response.governanceRule ?? response.rule;

export const unwrapGovernanceRules = (response: {
  governanceRules?: GovernanceRule[];
  rules?: GovernanceRule[];
}): GovernanceRule[] => response.governanceRules ?? response.rules ?? [];

export const unwrapGovernanceRuleCategories = (response: {
  categories?: GovernanceRuleCategory[];
  governanceRuleCategories?: GovernanceRuleCategory[];
}): GovernanceRuleCategory[] =>
  response.categories ?? response.governanceRuleCategories ?? [];

export const getCategoryName = (
  categories: GovernanceRuleCategory[],
  categoryID: string,
  fallbackName?: string
): string =>
  categories.find(category => category.categoryID === categoryID)?.name ??
  fallbackName ??
  categoryID;
