export class createQuiz {
  description: string;
  section_id: number;
  passing_marks: number;
  no_of_questions:number;
  sequence:number;
  created_by:number;
  }
  
  export class Quiz {
    id: number;
    name: string;
    description: string;
    passing_marks:number;
    no_of_questions:number;
    config: QuizConfig;
    questions: any[];

}




export class Question {
  id: number;
  description: string;
  options: Option[];
  answered: boolean;

}


export class Option {
  id: number;
  questionId: number;
  description: string;
  isAnswer: boolean;
  selected: boolean;
}


export class QuizConfig {
  allowBack: boolean;
  allowReview: boolean;
  autoMove: boolean;  // if boolean; it will move to next question automatically when answered.
  duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
  pageSize: number;
  requiredAll: boolean;  // indicates if you must answer all the questions before submitting.
  richText: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showClock: boolean;
  showPager: boolean;
  theme: string;

  constructor(data: any) {
      data = data || {};
      this.allowBack = data.allowBack;
      this.allowReview = data.allowReview;
      this.autoMove = data.autoMove;
      this.duration = data.duration;
      this.pageSize = data.pageSize;
      this.requiredAll = data.requiredAll;
      this.richText = data.richText;
      this.shuffleQuestions = data.shuffleQuestions;
      this.shuffleOptions = data.shuffleOptions;
      this.showClock = data.showClock;
      this.showPager = data.showPager;
  }
}
