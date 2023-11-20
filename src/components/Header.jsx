import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { useRef } from "react";
const HEADER = styled.div`
  margin: 0 auto;
  width: 1150px;
  height: 450px;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 10px 0;
`;

const BUTTON = styled.button`
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  margin: 0 auto;
  width: 150px;
  height: 30px;
  border-radius: 10px;

  &:hover {
    border: 4px solid black;
    color: white;

    background-color: black;
  }
`;

// const imgRef = useRef();
function Header({ list, setMember }) {
  const divRef = useRef(null);

  let ClickMember = (e) => {
    let current1 = e.target.value;
    setMember(current1);
  };
  return (
    <HEADER>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAMAAAAIR25wAAABTVBMVEX////8zaX/zoMAsakAAAD/0qn/0YX/1Kv/1IdJKyz/0aj/1ogAta3/161HKiu538n19fX/2YoAubEApJwAGBm/5s//27BvVTQMDAzk5ORZWVltbW3e3t5TU1MaGhokJCS9vb1iYmI/Pz+EhISmpqbt7e04ODi6urqRkZEdHR06LyYtLS2bm5vLy8t5eXkSEhIdERIwHB09JCW1k3fetJEAhoAAU0+Yt6VPQTSkhmwqIhu8vLwfGhVuWkjvw51GOC19ZlK+mnzLpGjtwHoAeXQADg4Alo8AamUAIiAlHhnRqomKcFtfTT53YE795dD81rV/Z0JdSzCdgFFHOiXYrm6Sdks4LRy4lF4AOzpCUEiHo5N0jH4wKSX+8eb+7Nv938ZQQSlAKxgrFgoAYF51WjgAISIANTZFLyWrzroARkJdcWZ7lIU1QDrR/OMoMiyo1SB4AAASr0lEQVR4nO2d+VcaSdfHBS80aWwFjFjKoiCbIDYKGulpGhBxAZyIoGhiZpzEONGZyf//43urm1VBmomvRebxe04WFT318d66Sy3NxMSrXvWqV73qVa961ate9ar/Hdnc4YjLH/MSQsQlvysQZz2gH1Qw4PKLACSB2sA/IgHRE1lgPax/rWB4cRVxNjY3N6ffaJre3Nwg4HW5WY/tXym+EkPrbEy/md4gGwiDwr8o12YCyE8IFUcDJTY2ESUBAAmNiLKpVAi1tMZ6iKPJ7SKQ2NTGDlIWNt+oRBrbpvoFAotB1sPUL1tklRBAA20gUDStZCjSGyQ6kgn+myD0w+kNCP00wS8egp18Fgg6HNlJKk7+Cug0SkA0tYNwb4jmh+iG3jDrseqSbYUcpQ3OpCRKO+WUieMNBpJQPTCbch5TJDTdpjqlNon4MzC5PVBJCQYDnyqlOAF5DCoSTqOMYuLSsKEiJWg4T2xOE/EX1gMeqvCqmDZxlIPj1H+oJHRBOc2ZDFyJwiTkLCXbAIJ28o77fFoj0ZJgeCA+LR9lUtRivBKF6TdEKknU9aixNiE23qXEOuwoj4ioE6aaJhNyaB/ImpJoIeqAG2grD+tRPyGbCzKGpreZBGdzImlO2PpPSoYElJ3csWohIDRZRVgPfLB8cGxQMXiOL5Uz5RRneCQueYSW5HkFp9MmxnmsJhLi2E4nH+RMTSKalURC0o+ZOKeSMpiouaIYMypRnFOb4Gc99AFytYhMhhzI5ZKCXA+YeMFQyitOk+aCGTmaStIIuAHjWe6twLFJs4Oyg5nJyfGCEhW7fc/EpXKSSORjRf2kiU8pHKeWf2RpHKNeACoGFcmEs6SsZSahBOUOEqfkgESPyzuQVUyaf2KiymtmWmE9/seKi81xmtBGaU6LdbwhGu0Q4eSp5E1OQUgjfTsY8mrVl/COnZkWlo40F+P5CpTbmQmzkNIcPFeSEVVQJ1QO0p2XqGbaHDsz2Twkrw1SKMMx1zaBMw0lvmkjScwLbePJSmeGUTNNJ7xj1jtFWnMGp8aONqU0wCQkm5NpB/JtyziTXZZ0NoPeeOXbuLjDN42RO+qOcUK+mZrQeGVn5/OGK6nlkGizKzXohWysMbpk88stDl5J8YbHSKaUGFVMXZ9PQ7JtJq6sluVknDqnSNds57sGrjqeioQBId9TzSqkYmqbKSVipbcJLtYcHbm9Oz0cXcLwkKfFjyJnH5QRFbFjNS4zbgHCR0oDkcpAHRF72WQvEnpevv2ZVoAYG8+LY9QeQITJqKzZ5EjppcYeo1NXmBQJ6DrEImuUljxyvx6i5WBa/s3n+YdfyXfFEWdGrSCWxsTzlkmuTxvbdK924/f4JVwXJKd53rjEvEVZeWSBlkqlgV/qEa+IiemxKYrig43ElcRscwYpA17SZlKLIuIZi2zrIoNnUgWyzdLhKjnQOTX6tFaOj8NmRlCsDI4NOyJNSlg6RCHtHPgqFbqkrests+aZoMt2ycGDTWlTCUsIMf+0lUypI0I7jHEoXf1Xg4ODwdSszkurlSeBqHboPsc4ZKa49/jpX7+mUmpY5KPL/9OYmVgDod/BwFqoW9zQFzm15X/Cvl1flHQA6RF2IYmxiA/B1Yy+XDpUppSsxgfm63lxGJJvdIs3SBSJMO+ZVsTHGy+9ev9eJ5MQhelprB9YI3miT4RwVb/rRtKW85gvji9VhvmdfiStv4gx7i/cYu7pOsdg+E0vEpdTo/gS4yovTNJDrMR90o1Uho3pzQRxrcVZluNrJD+4ZlX1fuJXvUhp9ZgEyAT8AXZIK+KwQuf9xMQQ6JaEHEC0nC+lUmkJXMwM5ZKHtXaIpNNMXJSkeU6VIUd8rJh8R8NqN0Sa0DWbuBJkWvOSF8rMuoxFaZhXUaRPemomUyrTcWLetLPKKPJ5osOQTJ/wZb/pQKJ78J0PuDyrYm84kuG3Cb1MPXxKlFFlpAPpV/WFn34flSnDqBkcPpcMvzdfqruK0CTkCBuk4REPy4fWi0cylFBmhLQ+NC81J5Mq3bURRcqJbJCwXRoaoN93vV6/ofhKjA1SYGiNZ2gFiNGYMOIxWv6Kk7KOPv1T5xs+6UTiUoRR+RBczQzrlwz/yvWwLGd1nM2fNeiodn7vfIPeGjYbYtXdrsslPb1DZzrpQ+JKZJ0R0cSyzkWvdiTX53hCRWTWrwdXK3rWj9H3tP5HX7En5Fku57nEYateTb3/9ZNNZ6VnMkRZnmQL6wrjw9W1PW0yZYDh4sOELRTVE/OGSSjntLPYPCcoFWAWG1StDduy1Id0DJWUyel0mpRklDDeV7fFooq+CPGkuByIlVw5V5EgxPzwQwCeYTbxhgrxxERRXFoMjMEJFR/RlW6fJMKIsIYWXxgDHFQ4BFHlx5h4rsw4IvQoTKRqz2nWzkAFQWcsRCIfa46OFpbOC/az1qH3nnEa8kl91sOye3EsDtpoWoGG3Ww5gcrDS0tcKQsg66kAhTTElt3BcYFyi1WL0Wi2nkG21yJcSoLKsTj4OGVLdB4BIQCr/pXwOGCtk12rEZkspyB179ryBnpqyJmHnSGuZzLloNZonJ6ezdcI+NlfY1rwVi1mI2WyNuhdpY5JlKMcZ+D5nejTVuIMGaga7VRmY+FUZn81a6VlJKPRXj+HTLfz0SPTfCr1JJGQysKJ0WJUfytmi70uvfjus63X2YOxGrWRudDAv62FebjKCw+OTj8Vxk1CXoYzzcya7CcvfeAmvrTq657CAWjQ4GCZJwUcl8VyKkOu33XNASZSciBjvDR2IZ2S5ZdFcomVI/B3qkr/uYqyCzea79jrVZDSPbsqg8RzXD4K1YLVaGSJZPNIipKW27V/HM7s1ONqckFDMlrNjXOIJg3OYaFbMKUqIJ9aeomM9jPyomsOCx7ImJSMDK0lNp9cRxQrGsneGpPZajyT6MMQnqyFBEM+A+SmYDUbHyDdiC+amlykbFCyUKk07xG4V6uqkapQ75kPBYSSjkvYn/axlYnjeKUcJTC/+wjIaDbWXjTiBWNRg1DBBJpvnpmLwC41Ul2s9rqPxVo4PScglUsK7xTaE4tHRienlNI7ANJJ/aHPqd9Zf9GGNughlCajGJIQWVlfiURi5+owzmD34ejMVsvuSQ3gqJJL51MKJ1AZUqVkuXKFPPMNo/2RhdSpuPuiF0mWsXl1pkE+yiaBqBebyamKIteMfcZntRfqp1UZqzdRlqWr6NWRjN8CpHa2W7D2B1KRXvLZD8v0tpiCXiOmsiKcFeq7uxTF2oBTe9/xma1Wi7HeOLup1mq181rtev6sUcckZrX05zGqP+wlCyL30rFg4BVEUjBF0o5CHZr9uh3B+3Np5Zv2n8cBgSnShD/K8dwOpPN5547UwsAJXe1vpB4w1NAX0Z92+rJpKYKeJ6STyhVU4KSFgQ3t7hNGGs7ai3T2sncubH6STdPEhDGr3sQwG8+lfsFBrwqFnm+23LzwI0dsKzEMeMSFsaE1EEsdzvrkl6dlbs8qa+26x2vNVf9L97XB8PpieAGq7TRpvSH1UZGs9ZP5k0bBilT2c6nHSuZzRnvOEbgutH65ck3fxO/IviurSe26YTbbq3Kv58mstpXWiNRQPWdwUhpso12JJLEqwi5l3mw/ketdgd1cZ7WNjmk3hmU0Zht7lRRGM5K1LtG1WZMgpKISbY8aXX5rPWV4vXHBB1LDbC/I1yPOJOsZaHfVeYXM13dP4Pz8vBU+sbVYZXkvJhCC692G2qiPIssJQJn2HMIxSNh5Een6pGVos/llW4tHCq6sYkX6VDHUT/ZT0JbBhB2Qbk7r9YKxvZxircus76AG16E6aryzFKQrbQMzJZ8b7VZL1w9AXOareGHSGDHe0fnSvJbmLEO918SWm1XmC8geacR4p86X5l1p5SESFlfML/osLOkowh/IuqvdlXamJXS8nmbDXGC97awuTI5c39kbkHaaOGcJo915o2C0dwxlaTA97aBqfdQ8a1TDg5xUUmUinmAXL1ZP65YWlfWE+dMMbf7aqEBGtSCiCam2a7fUT6siyLWTXQsNfBbz+YuX4Q+1IJ78m+bPWjirzu8arXTFxVxozMtAquiBFssZ+8uayzB6CKcyW63WVno1W+zGmugFqVqtAfu73JHRW6V+gMaaxx3whWL+NdZuNzHhOh+1GuqLVJCY36Rty9N3SXJUWQrseqRHCl0/C1KdfTZqKzRyzdoXqcH+on1bz+N42MmyTrAdeUhzn9VsUVeJ7fYnVrsHI52wvhvclnsRQDorWDHzF3bpSQzU6a7RMiqVpcrsjPsDBVaLB1tfIfHH9R+fE4QUVRHyGSHtI1FZa8w7ClULPjjccjgm9+5uv95e3H3Z29raR+19uYXEfKNgt1t0zzKLxL5oQIVjsD3rmJycRKpZ/As1RYUfbt0BfL4+w6JN3a7okcXSqYRaMhfkMThbuOCiJpqaVIUgk12ackzNHly8LSLXH9X5+Zub+Y5ubnCyFSz2Hse01EXmfd9EoGWiAVJtdfAFXfJtr4oICufVk0bdiNayaHtOZrPE+ryk29dloieo8CWzj7V/cFsEkvj8B3IVCmpNbme94LDsLT5poi6sfqJTbn9v++IQDYbBcv7k5GSe9fNf1otDTTSUFU04u791sH3xlXoihBg/S2kNZn+QqI2FP4f64gWji5ltxckXdLvnoJrUfNNx8NKn1R7Jf+i4uHguJpRjq8h6xSFS3DqAu+djmpotsk61Qe/F3ld4PjtNTb5lGPFs7uWILwRAvDLcTT2bnd4yS7Xxdb8IJLpzXE6WUlnY1pWchmtqlpmVwiLJIoxiEJyCSUgdwd7zMCESq7kUIXmO51rHBYU8Ke4/C9PUfpHVAtFy78VMIQ2HzxIiHFuE2QJRLNt7RLXyPNMJUy2z1ZQV0vNsP3rxZWsA0yjWc+yxQ3JDrufqgZCHr/3rvdlRykBEWmaFNOE56n1MinDc3/Uc26NEDkRidyAl8OA9enilv+s59ouH+loq5kjBWLb3JLuQhNt+RYRjb4SCiWXEowEi37lKodALmRU46Ot6X+CLXjOxRVogUiZJUThnKor688/P8LZfKHA4LnQXF9hcsNy48KiPTczmkvkcLEHx8OvtYb8I4Zg9uIDilj7XY9wvxYlnzedfpWDwS+iQrknewaPo5ti/Bb8fbvVZiWFBpGoxRq+Ru+PLPu9CnFxgm70PFw/XJg+KYsBm8x/+HEiR1jb+emwBP9hGpi+9gXxq6ot2kXS9qC/hIhLL1Vb3EjQPW/joBooL4x32Bt3lq2Nyu3k1O4BfdOjoE7FRZ4kUxqCghScPRbMt0mEfdILblGPrFppP8rT5i9tb6hbAk1gOB7t+iWqNfCAh9X9+ddE36KF56evXppkcs9vFzps5u30ivL3dPtjan2xtbPRsCWgbHfsHd0zfoWjF++1eM1NMWy+weTCIb92pswZNdAiu7pVTdxh7e1J8e3hBwWZnZzUSh6bJWcQ5LJKldSb7mkF3PB4OB/xL376J6uLoavM3a/PBnVbPoYkg9jhp2uKBdQ/RHgRc/Hp4e3G3/eXg4GDv4MvFWyAxzwqTxx3H1z2hmFcd1OXM3D3419cCYtv/V9TtQMfU3iH4Bi1uu8RkMl3OZSrZP6XPCfUnAQm51pZZrYZ74fvl/ce/Prz79u3bzMzM36K6Nt/+5YaX4G5/7xZigwvqMOSd2jVHhaosxhfcC9oPcDOx0iLcz/wzpwqJZua+ffj48b7rRMnCuhfAH3liaO7VTOut21BCWWx9s21dZBIcbC74/teMxqNqbu6fme+h7iGHl5/e5+954wiujF63voy/ggU/XF6yeROpQAi+f3w31031caTLopGeJ1JyGcBC0esLhMSPc38Bm4MctoAfvJf3H761/G/um3eUrX23eNz1jCxnDmzugGsJ4K+5uQ/MTrvb4q6YSLzfLz9+wCCBrnc/0tvL+rvfZwGtRD8XXIMPc3PvmL7JXHzN5YmJQDAA3n+8HOmJIBHSeasiXomuqp90k0tEYtnUqlqIhyPYMmFuGenBQW5Sdraeq8Klmu/OsbD0nSKx3jHTZAu6R8ySnqN8im4RYHpyJlstit87Pkij6xcR5OhOJldO50tHqxi3g/Hl5dBPjTThDqwvhlZFeq8Razu/6rvwcyNpQtsEVly+RT/Wi/f3l/f/AaSWbBEsgbHKmhmDiPdsisDf72jOfjdG549/VAGv9x210vi8n+uP6xf4iEjsCqL/BwX/e0g28X6OlvTjcqT6GWSLXWJ4uGf5sONnl+fvmbmZv5nfLHtOra9+m5sRx+emzzMoAO8wOvx30tIE3dv5+M8l00cHPLuCob/fiaxPVD+zImRpjC76PItsvv9KGf6qV73qVa961ate9apX/e/p/wCJ4cZZELXkBgAAAABJRU5ErkJggg=="></img>

      {list
        .filter((list) => list.id < 5)
        .map((box) => {
          return (
            <BUTTON key={uuid()} onClick={ClickMember} value={box.member}>
              {box.KR_NAME}
            </BUTTON>
          );
        })}
    </HEADER>
  );
}

export default Header;