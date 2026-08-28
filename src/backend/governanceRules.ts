import {
  ResponseSpec,
  GovernanceRuleSpecs,
  CreateGovernanceRuleResponse,
  UpdateGovernanceRuleResponse,
  GetGovernanceRuleResponse,
  ListGovernanceRulesResponse,
  ListGovernanceRuleCategoriesResponse,
} from '../types';
import { apiFetcher } from '../apiFetcher';
import * as governanceRulesHelpers from '../helpers/governanceRules';

export default (apiUrl: string) => ({
  ...governanceRulesHelpers,

  /**
   * Lists all Governance Rules for the current tenant.
   * @param authToken - The login token
   * @returns A list of GovernanceRule objects
   */
  listGovernanceRules: (authToken: string) =>
    apiFetcher(`/GovernanceRules/${authToken}`, {
      apiUrl,
    }) as Promise<ListGovernanceRulesResponse>,

  /**
   * Gets a Governance Rule by ID.
   * @param authToken - The login token
   * @param ruleId - The Governance Rule ID
   * @returns The GovernanceRule object
   */
  getGovernanceRule: (authToken: string, ruleId: string) =>
    apiFetcher(`/GovernanceRule/${authToken}/${ruleId}`, {
      apiUrl,
    }) as Promise<GetGovernanceRuleResponse>,

  /**
   * Creates a new Governance Rule.
   * @param authToken - The login token
   * @param specs - The Governance Rule specifications
   * @returns The created GovernanceRule object
   */
  createGovernanceRule: (authToken: string, specs: GovernanceRuleSpecs) =>
    apiFetcher(`/GovernanceRule/${authToken}`, {
      apiUrl,
      method: 'POST',
      body: specs,
    }) as Promise<CreateGovernanceRuleResponse>,

  /**
   * Updates an existing Governance Rule.
   * @param authToken - The login token
   * @param ruleId - The Governance Rule ID
   * @param specs - The Governance Rule specifications
   * @returns The updated GovernanceRule object
   */
  updateGovernanceRule: (
    authToken: string,
    ruleId: string,
    specs: GovernanceRuleSpecs
  ) =>
    apiFetcher(`/GovernanceRule/${authToken}/${ruleId}`, {
      apiUrl,
      method: 'PATCH',
      body: specs,
    }) as Promise<UpdateGovernanceRuleResponse>,

  /**
   * Deletes a Governance Rule.
   * @param authToken - The login token
   * @param ruleId - The Governance Rule ID
   */
  deleteGovernanceRule: (authToken: string, ruleId: string) =>
    apiFetcher(`/GovernanceRule/${authToken}/${ruleId}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * Lists all Governance Rule categories.
   * @param authToken - The login token
   * @returns A list of GovernanceRuleCategory objects
   */
  listGovernanceRuleCategories: (authToken: string) =>
    apiFetcher(`/GovernanceRuleCategories/${authToken}`, {
      apiUrl,
    }) as Promise<ListGovernanceRuleCategoriesResponse>,
});
