/*
//const API_key = `97a48ff14e5f4a689f2b38b933426b5b`
let news = [];
const getLatestNews = async () =>{
    //const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
    let url = new URL(`https://study-website-be-bbb1539aa813.herokuapp.com/top-headlines?page=1&pageSize=20`);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddddd", news);
};


getLatestNews();
*/
const API_key = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const pageSize = 10;
let page = 2;
let category = "";
let keyword = "";
let news = [];
const getLatestNews = async () =>{
    const url = new URL(`https://topnews-api.app/top-headlines?country=us&pageSize=${pageSize}&page=${page}&category=${category}
        &keyword=${keyword}&apiKey=${API_key}`);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddddd", news);
};


getLatestNews();
 
