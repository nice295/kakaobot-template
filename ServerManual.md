# 서버 매뉴얼
리눅스 서버를 운영하는데 필요한 정보를 모아논 곳입니다.

# 접속하기 전제 살아 있나 보자
```
ping <server ip>
```
> 그런데 가끔 ping 응답을 안 하는 서버도 있긴하다.

# 서버 접속하기
ssh를 이용하여 접속한다.
```
MacBook-Pro# ssh nice295@<server ip>
```
# 수퍼유저 계정만들기
root를 직접 운영하는 것은 아주 위험하므로
root의 권한을 가진 일반 계정을 하나 만든다.

우선 일반 계정을 하나 만든다.
```
root@hs12249:~# adduser nice295
Adding user `nice295' ...
```

그리고 수퍼 권한을 부여한다.
```
root@hs12249:~# vi /etc/sudoers
```

/etc/sudoers 파일에 아래를 추가한다.
```
# User privilege specification
root	ALL=(ALL:ALL) ALL
nice295	ALL=(ALL:ALL) ALL
```
그리고 일반 계정으로 전화한다.
이후로 ssh 접속 시 일반계정으로 들어간다.
```
MacBook-Pro# ssh nice295@<server ip>
```

# 로컬 파일 서버에 올리기
TBD

# node server 백그라운드로 수행
다른 여러가지 방법이 있지만 forever을 사용하는 것이 안정적이다.
일단 forever을 설치한다.
```
sudo npm install -g forever
```

아래와 같이 하여 application을 수행시킬 수 있다.
```
forever server.js
```
혹은 서비스로 구동할 수 있다.
```
forever start server.js
```

# node server 조회하기
구동되고 있는 것을 아래와 같이 조회할 수 있다.
```
forever list
```

# node server 중단 하기
종료와 재구동은 아래와 같이 list 번호를 추가하여 시킬 수 있다.
```
forever stop 0   
forever restart 0
```

# 서버 디버깅 하기
TBD
