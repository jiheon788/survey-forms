export interface IForm {
  id: string;
  questionBody: string;
  answerType: string;
  isMandatory: boolean;
  options: {
    id: string;
    value: string;
  }[];
}
