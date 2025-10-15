export const BLANK_DMN_13 = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/"
             xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/"
             xmlns:di="http://www.omg.org/spec/DMN/20191111/DI/"
             xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/"
             id="Definitions_1" name="New Decision" namespace="http://camunda.org/schema/1.0/dmn">
  <decision id="Decision_1" name="Decision">
    <decisionTable id="DecisionTable_1">
      <input id="Input_1"><inputExpression id="InputExpr_1" typeRef="string"><text>input</text></inputExpression></input>
      <output id="Output_1" name="result" typeRef="string"/>
      <rule id="Rule_1"><inputEntry id="InputEntry_1"><text>-</text></inputEntry><outputEntry id="OutputEntry_1"><text>"ok"</text></outputEntry></rule>
    </decisionTable>
  </decision>
</definitions>`;
