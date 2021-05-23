import {Condition} from "./Condition";
import {ConditionSummary} from "./ConditionSummary";

export type AccountManagerStatistics = {
  fullName: string;
  conditionSummaryMap:Map<Condition, ConditionSummary[]>;
}
