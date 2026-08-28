import {
  getCategoryName,
  unwrapGovernanceRule,
  unwrapGovernanceRuleCategories,
  unwrapGovernanceRules,
} from './governanceRules';
import { GovernanceRule, GovernanceRuleCategory } from '../types';

const mockRule: GovernanceRule = {
  ruleID: 'rule-id',
  tenantID: 'tenant-id',
  title: 'Test rule',
  text: 'Rule text',
  categoryID: 'cat-1',
  rationale: 'Because',
  status: 'Active',
  scopeType: 'All',
};

const mockCategories: GovernanceRuleCategory[] = [
  { categoryID: 'cat-1', name: 'Safety' },
  { categoryID: 'cat-2', name: 'Privacy' },
];

describe('helpers/governanceRules', () => {
  it('unwrapGovernanceRule prefers governanceRule', () => {
    expect(unwrapGovernanceRule({ governanceRule: mockRule })).toBe(mockRule);
  });

  it('unwrapGovernanceRule falls back to rule', () => {
    expect(unwrapGovernanceRule({ rule: mockRule })).toBe(mockRule);
  });

  it('unwrapGovernanceRule returns undefined when missing', () => {
    expect(unwrapGovernanceRule({})).toBeUndefined();
  });

  it('unwrapGovernanceRules prefers governanceRules', () => {
    expect(unwrapGovernanceRules({ governanceRules: [mockRule] })).toEqual([
      mockRule,
    ]);
  });

  it('unwrapGovernanceRules falls back to rules', () => {
    expect(unwrapGovernanceRules({ rules: [mockRule] })).toEqual([mockRule]);
  });

  it('unwrapGovernanceRules returns empty array when missing', () => {
    expect(unwrapGovernanceRules({})).toEqual([]);
  });

  it('unwrapGovernanceRuleCategories prefers categories', () => {
    expect(
      unwrapGovernanceRuleCategories({ categories: mockCategories })
    ).toEqual(mockCategories);
  });

  it('unwrapGovernanceRuleCategories falls back to governanceRuleCategories', () => {
    expect(
      unwrapGovernanceRuleCategories({
        governanceRuleCategories: mockCategories,
      })
    ).toEqual(mockCategories);
  });

  it('unwrapGovernanceRuleCategories returns empty array when missing', () => {
    expect(unwrapGovernanceRuleCategories({})).toEqual([]);
  });

  it('getCategoryName returns the matching category name', () => {
    expect(getCategoryName(mockCategories, 'cat-1')).toBe('Safety');
  });

  it('getCategoryName uses fallbackName when category is missing', () => {
    expect(getCategoryName(mockCategories, 'missing', 'Fallback')).toBe(
      'Fallback'
    );
  });

  it('getCategoryName falls back to categoryID', () => {
    expect(getCategoryName(mockCategories, 'missing')).toBe('missing');
  });
});
