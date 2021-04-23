// 課題1: クイズデータをAPI経由で取得するクラスを作成する
// - クラス名はQuizFetcherクラスとする
// - 次のクラスメソッドを作成する
//   - fetchMultipleQuizData : 4択問題のクイズのみをAPI経由で取得する
//   - fetchTrueOrFalseQuizData : 2択問題のクイズのみをAPI経由で取得する
// - クイズデータ取得に利用するAPI
//   - https://opentdb.com/api_config.php
// - その他参考
//   - 【JavaScript】fetchを使って外部データを取得する
//     - https://tsuyopon.xyz/learning-contents/web-dev/javascript/frontend/how-to-use-the-fetch-api-in-js/
//   - MDN : fetch
//     - https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch

const fetch = require("node-fetch")

class QuizFetcher{
    constructor(){

    }

    fetchMultipleQuizData(){
        fetch("https://opentdb.com/api.php?amount=4&type=multiple")
            .then((response) =>{
                // console.log(response);
                return response.json();
            })

            .then((data)=>{
                console.log(data);
            })
    }

    fetchTrueOrFalseQuizData(){
        fetch("https://opentdb.com/api.php?amount=2&type=boolean")
            .then((response) =>{
                // console.log(response);
                return response.json();
            })

            .then((data)=>{
                console.log(data);
            })
    }
}



// 課題2: fetchMultipleQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
const quizMultiple = new QuizFetcher();
// quizMultiple.fetchMultipleQuizData();

// 課題3: fetchTrueOrFalseQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
quizMultiple.fetchTrueOrFalseQuizData();

