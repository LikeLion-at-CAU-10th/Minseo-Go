# 6주차 세션 Review
마크다운부터 뚝딱거린 기디 ... 정말정말 어려웠다 ..ㅠㅠ
- - -
## 0. Intro
**Django Frame Work란?**   
파이썬 언어 기반의 웹프레임워크(웹 개발을 빠르게 할 수 있도록 틀이 잡혀있는 상태)로 데이터베이스 기반 웹사이트 빠르게 작성 가능   
--> Django만을 이용해 온전한 웹사이트 개발 가능   
   
그렇다면 **웹서버**는?   
웹서버의 기능은 웹 페이지를 클라이언트로 전달하는 것으로 주로 그림, CSS, 자바스크립트를 포함한 HTML문서를 전달   
즉, 정적인 정보를 반환하는 역할을 가진 소프트웨어   
   
**API란?**   
UI와 GUI가 어떤 사물(스마트폰,컴퓨터 등)과 사람을 이어주는 것처럼, 프로그램과 프로그램을 이어주는 다리 역할!   
> 레스토랑이라고 가정해보자.  
손님(내가 만드는 프로그램)이 웨이터(API)에게 주문을 하면   
-> 주문 내역을 주방(API제공자_기상청,공공포탈)에 갖다줌   
-> 주방에서 요리를 해 웨이터에게 주면   
-> 웨이터가 손님에게 음식 전달   
즉, 웨이터가 손님의 주문을 주방으로 전달하는 매개체 역할   
손님은 주방에서 무슨 일이 일어나는지 잘 모른다 즉, 내가 가져다쓰려는 API의 기능을 어떻게 구현하는지 몰라도 되기 때문에 처음부터 개발하거나 요지 보수할 필요가 없는 외부 데이터와 기능에 접속할 수 있게 해준다   

## 1. 가상환경을 만들어보자
가상환경이란?   
-> 독립적인 파이썬의 실행환경  
   
왜 만들어주는데?   
* 가상환경을 미리 만들어서 사용자가 프로젝트에 사용할 패키지들만 설치해야 할 필요가 있기 때문에   
* 시간이 지남에 따라 패키지들도 업데이트가 되는데 호환성 문제를 위해 패키치의 버전들을 한번에 관리하기 위해   
기본 모듈은 제공하고 있지만 추가 모듈은 pip install 명령어를 통해 설치 필요
   
- virtualenv venv(가상환경명) :  가상환경 생성하기   
- source venv/bin/activate : 가상환경 사용하기(진입)   
- pip install django : 가상환경에 장고 설치하기   
- django-admin startproject 프로젝트명 : 장고 프로젝트 생성하기   
- python manage.py runserver : 서버 가동하기 (http://127.0.0.1:8000/ 뜨면 성공, 8000은 장고 기본 포트)   
   
## 2. 서버를 구축해보자
~~사실 여기부터 따라오기 벅찼는데, 정리라도 해보자~~
   
admin은 admin 패널에서 보여지는 곳   
models는 DB(Data Base)와 관련이 있는 곳   
urls.py를 설정해서 사람들이 직접 볼 수 있게 url을 지정   
views.py 유저들이 볼 수 있는 공간   
   
- django-admin startapp footprint : foorprint라는 앱(프로젝트 하위에서 기능별로 구분하는 단위) 만들기
![app](https://user-images.githubusercontent.com/101655617/170074941-7aebfca7-aefb-4bb1-922d-71b28a01d73e.png)

- settings.py에 생성한 app 등록
- urls.py에 foorprint views 함수 등록
- footprint 폴더의 views.py에 footprint_GET, footprint_POST 함수 정의
- footprint 폴더의 models.py에 Footprint Database 모델 정의
- views.py/footprint_GET 함수 & POST 함수
   
이렇게 하면 시행이 된다고 한다 ...ㅎㅎ   
차근차근 이해해보면서 채워가봐야겠다:)








