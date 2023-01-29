<h1 align='center'>The FIFA</h1>

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>

<h2 id='overview'>Overview</h2>

<h2 id='run'>환경설정 및 실행</h2>

<pre>
git clone https://github.com/mingyeongho/TheFIFA.git

루트 디렉토리에 .env 파일 생성

.env 파일에 VITE_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiMjAwMDA6MTAiLCJhY2NvdW50X2lkIjoiOTkwNTAxMzA3IiwiYXV0aF9pZCI6IjQiLCJleHAiOjE3MzA0NzQ0NTksImlhdCI6MTY2NzQwMjQ1OSwibmJmIjoxNjY3NDAyNDU5LCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.EYTRexKJMPOEFwbR8SKUfoDM734OKXFDIBEJVDp1vh4 추가

npm install

npm run dev
</pre>

<h2 id='features'>요구사항</h2>

- [x] 유저를 검색할 경우 /user/:nickname로 이동하고 매치 기록을 보여준다

- [x] /user/:nickname으로 이동하면 매치 기록을 보여준다

- [x] /user/:nickname?record=trade는 거래 기록을 보여준다

- [ ] 존재하지 않은 유저를 검색하면 404 페이지를 보여준다

- [x] MatchRecord와 TradeRecord를 보여줄 때 각 Nav에 따라 다른 데이터를 보여준다

- [x] /user/:nickname에서 다른 유저를 검색할 수 있는 Form이 존재한다

- [ ] 매치 기록이 없거나 거래 기록이 없을 경우 '기록이 없습니다 '와 같은 것을 보여준다

<h2 id='library'>라이브러리</h2>

<img width="380" alt="image" src="https://user-images.githubusercontent.com/57670160/215244537-b50d10e0-4d8f-4d87-8748-732368df6527.png">

<h2 id='structure'>폴더 구조</h2>

<h2 id='agonize'>고민한 부분</h2>

- 한 유저 검색 후 Home으로 가서 다른 유저를 검색하면 Error 발생

  - useQuery의 key에 accessId를 추가하여 accessId가 변경했을 경우 queryFn을 실행하도록 하였다

- MatchDetail을 어떻게 표현할 것인가

<h2 id='improve'>개선사항</h2>

- MatchItem을 가져올 때 MatchInfo 배열이 한 명의 유저를 가져올 경우가 있다

  - MatchInfo의 length가 2보다 작으면 그 데이터는 안가져오도록 변경

- 검색 기록이 남았으면 좋겠다.

  - UserPage에 들어가면 user 정보를 가져온다.
  - user 정보를 가져오면 localStorage에 이 데이터가 있는지 확인하고 있다면 그 데이터를 지우고 최상단에 데이터를 올리고 없다면 그냥 최상단에 올린다.
