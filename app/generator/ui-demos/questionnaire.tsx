"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices, QuestionnaireChoice, QuestionnaireActions, QuestionnaireNext } from "@/components/ui/questionnaire";

export default function Demo() {
  return (
    <UiDemoShell title="Questionnaire" importPath="@/components/ui/questionnaire">
      <Questionnaire className="max-w-md">
        <QuestionnaireItem value="favorite">
          <QuestionnaireTitle>Pick your favorite</QuestionnaireTitle>
          <QuestionnaireChoices type="radio" defaultValue="design">
            <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
            <QuestionnaireChoice value="engineering">Engineering</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>
      </Questionnaire>
    </UiDemoShell>
  );
}
