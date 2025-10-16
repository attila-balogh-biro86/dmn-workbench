export const AUT_GAP_CLOSING = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:di="http://www.omg.org/spec/DMN/20191111/DI/" xmlns:dc="http://www.omg.org/spec/DMN/20191111/DC/" id="definitions_automatic_gap_closing" name="Automatic Gap Closing" namespace="http://example.com/dmn">
  <decision id="decision_automatic_gap_closing" name="Automatic Gap Closing">
    <decisionTable id="decisionTable_automatic_gap_closing" hitPolicy="FIRST">
      <input id="input_gantryStatus">
        <inputExpression id="inputExpression_gantryStatus" typeRef="string">
          <text>gantryStatus</text>
        </inputExpression>
      </input>
      <input id="input_gapLength">
        <inputExpression id="inputExpression_gapLength" typeRef="number">
          <text>gapLength</text>
        </inputExpression>
      </input>
      <input id="input_maxGapLength">
        <inputExpression id="inputExpression_maxGapLength" typeRef="number">
          <text>maxGapLength</text>
        </inputExpression>
      </input>
      <output id="output_action" name="action" typeRef="string" />
      <output id="output_rate" name="rate" typeRef="number" />
      <output id="output_description" name="description" typeRef="string" />
      <rule id="rule_1">
        <inputEntry id="inputEntry_1_1">
          <text>"CLOSED"</text>
        </inputEntry>
        <inputEntry id="inputEntry_1_2">
          <text>&gt; maxGapLength</text>
        </inputEntry>
        <inputEntry id="inputEntry_1_3">
          <text>-</text>
        </inputEntry>
        <outputEntry id="outputEntry_1_1">
          <text>"OPEN_GANTRY"</text>
        </outputEntry>
        <outputEntry id="outputEntry_1_2">
          <text>0</text>
        </outputEntry>
        <outputEntry id="outputEntry_1_3">
          <text>"Open gantry with zero rate"</text>
        </outputEntry>
      </rule>
      <rule id="rule_2">
        <inputEntry id="inputEntry_2_1">
          <text>"CLOSED"</text>
        </inputEntry>
        <inputEntry id="inputEntry_2_2">
          <text>&lt;= maxGapLength</text>
        </inputEntry>
        <inputEntry id="inputEntry_2_3">
          <text>-</text>
        </inputEntry>
        <outputEntry id="outputEntry_2_1">
          <text>"CLOSE_GANTRY"</text>
        </outputEntry>
        <outputEntry id="outputEntry_2_2">
          <text>null</text>
        </outputEntry>
        <outputEntry id="outputEntry_2_3">
          <text>"Keep gantry closed, waiting for next rate"</text>
        </outputEntry>
      </rule>
      <rule id="rule_3">
        <inputEntry id="inputEntry_3_1">
          <text>"OPEN"</text>
        </inputEntry>
        <inputEntry id="inputEntry_3_2">
          <text>-</text>
        </inputEntry>
        <inputEntry id="inputEntry_3_3">
          <text>-</text>
        </inputEntry>
        <outputEntry id="outputEntry_3_1">
          <text>"OPEN_GANTRY"</text>
        </outputEntry>
        <outputEntry id="outputEntry_3_2">
          <text>null</text>
        </outputEntry>
        <outputEntry id="outputEntry_3_3">
          <text>"Gantry is open, no auto closing"</text>
        </outputEntry>
      </rule>
      <rule id="rule_4">
        <inputEntry id="inputEntry_4_1">
          <text>-</text>
        </inputEntry>
        <inputEntry id="inputEntry_4_2">
          <text>-</text>
        </inputEntry>
        <inputEntry id="inputEntry_4_3">
          <text>-</text>
        </inputEntry>
        <outputEntry id="outputEntry_4_1">
          <text>"OPEN_GANTRY"</text>
        </outputEntry>
        <outputEntry id="outputEntry_4_2">
          <text>null</text>
        </outputEntry>
        <outputEntry id="outputEntry_4_3">
          <text>"Default safeguard"</text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`;
