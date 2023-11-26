import { useState } from "react";

const images = [
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHdSL-PaNA_YlW0GZktwrRoBJhDU-WQHG9F_DN-mTKCM5Rk26d0vINz56_KG4NUZW6dqNGMY4xf7fMpOqJibFG8Fgznk3M-cAFviCST4pn27wytMscQ4oe1agdUUG1Xq69RtdYaDdA9TVWqPb5e8G9S92VF-ok8dDne2fn3tymfzqdgIiSmEPrW5qfv1SYn7V3q7g6xnl_k7Si8CqGf-BVs9kObtIVvuggh4t7ZJfiy4LaZOgrQfwwX0pPcEAZzzckKTaPHABr-PdCYIMGcaRvqijZ0T4IpOfsbpmpD7blzToYnf1bv7WOikl8JeZ2-nl3v_hZQ2ZJBGBk6m1Zxp1_Wa_I6Dn660FC_6kGh2OOH4j-iFlltuQbFhIlL330upW4ov5Fuw7Le_4bxOCzkF8LI0BBRk0wPT7yrNKJ0Jp_VU0iFMPZaqAmzJ1mlWYn9_J-uo0xT2588bn9kQfYSKLu94c72fJZtX_AjqEjQooGGh99cBJdG8sywBuHGmRCsU-XHEXMyxx7TfM0vymJxRWq5XdS_loS0Ii8Qo259Q1gSDP6vSbyk3bR0NDBobJqYF1uRBP66C6LOmlQ7lLnZsF7XG5p3dOovMN4IlIrElxG0fhgKQm0D4-zyjYmCzfc0YYwaOIk2YMddg5NzmC1Bx0jaALs95msVbUD77zbE8WMgi8NNPjG6O6oKWGsujokZLoORcLJla9DnwuFtkEuysC6H7JX21FAs3jzSD-5iyJoAZNmSNKNY0mmP5eT8dvXZdDXokcQdqhEQ2MWMS5jY1RXDudD80AGNXDHaKbamjdWUFlAs_eViA-odJy6Ebp22y6v0uHge0ls5L-DsXhI2TMSC2AwYsheisY6YhoEIrsK-hZk-S4OU2QY2i5LulSaKNeLg=w663-h884-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHd_kjnsijG8xNPfWsHDfid7VrZVNIPzD46Ua1GuoNyfk06u8xE3lYl82NWifz0D3a4J3Sd3TCtwlGs68DYpQTx45N--bZJS8nk_YOJnoWbgsd2aEHAEhjwpWTBsF9gN9tK2vRRWnlOEGfpaZE5YrAhKKH61LYpqQGThrUvlgdQnXrYywQiYWS8TTv2ZtCl66HdBfuj_iFQtC9DhGUgWq_iqOhFAjrTpw6F0t8cWDVL8LunRsfU-lmteecO2-LmK8_WEiWvw00fEaanDxB5lO81TljvUuNp2IRQuygsGA7AmDCxCSQaP0KGBABBudEL0eE0UiXcXH1o4sPkJuNP0TLSjzXA80KusxGWH7c-TEYtXN5Ut0uwSxHRur8Et8yKIV93IVBZAJGOgCuR5cOw8G1er1tIU1-ZY7opa54e66YC1s8xWd2uoh9zIzzbh37sanLy2rH-9ImN7_6Yt4Zjii7RmTmXqbEwALWmQWg3lOsfqdwy1RnML5GbGhu-N0zWGzEjNVQhMRF78TVeQO5eeq5_BloIM3ghiyJfDFRWs8ksYDxsOyorS-jepKMRjI7Bi86ArWHrjNxuXIc-VDkGeD2-u4ATOwkVDPBTWqHSH6vPshFvw8GKFWsgI7XbIhhlwbDfHQla9cgHZspDs6KZC36yuUNqvaIJlrrM4EmDM7TyenvigN2yT3U83fMa0elh5X00NNEsS5P-WsCkIr3sMqhak-Frj5eg1keD_gAV_79uTP8sDaGWbo2XtwtcZ21gTPYPXIGebZPhDPWa6j5Nw5YfBKuPuCMbkKO7tIQwSEaPfAftVakY7dBqrFj7z7czYXNhEiEYsJAMtUcImGg_0AYzbwMGl-KacLl0IYIIxjPmmcJKH2ABSj12bLobYY8plKCw=w865-h884-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHcTSR21Zl9hV1KnNYnhaKaboxBAZLdG7xa34d39rFC6LIuNdeo8NFCrS1aJVbWXJ6MZqpmxLUOA_mSHk_nBjHeQWUE-SJAjuD0-F0Gt7uU0obuReGyUjncduFfvBW41YNkIovnQc8Dk_L17f-E9INggOtSTQa-POmgVbV2MOHK8ZuVaG1d7kzXP8qnG17Bm-S85WlLa-Q6YKu38RnnIqpSQ4NbsmUuyH6d3XpopMjySJjku-JRXviEDeOb1GYfXVceEIX2Jp5ao5CfxKsG9FLV437V81hYas8Nob5J-BMJiaQtezQTJMTTJlAjoeBENMWxb0IAUqyzIQBZsoQVEgM2Iowx9o7dT82dhzJ6rD3bVYJuEKHKZICVXP-sWYzq6yS__1WdsynJbkbn8P2soE6XPAg9sLRLIpYJ9XsT6eheFU5TMruPcGI8yx4pX1oS3r5QTVR-QWIfIvaMsjEt3_JqK-tvwm0vDxtc8ydkZ51SbYhlfnV03GvRomUwgF5rjvN67bjvMaCxKHLtyv9bOjmvWmQK7YXBT66foZzAB3nV_yHLCCjMrqQejtULDqfQqY-JLYSTxKSw4XQ8tw5E5-UdS6T1TE0KMXKV4dVOKxhcGkZEXerlWbhvuJGHs2mfDgPgAiW2Z75SkKAkvQUz9mCOwN1_CmMYV8friEMy1cYSh7zzqOY_mcCpX4Pi_-oll3_HsESwI4Cpb9tvYgdj_QfjAGjkY6feShi42pCj1IK3RV85FpmSO8lPwMUiszvbIWO-2C8QrDxTK4xuoI0eQXzGOmM9GsH4sX63stwNQQlDLoaTtSPnXcmVjVV8MNcL1zF-t9v_uKRYa7jTgBjimPgGdVqbjV6s8_QT6g6IAKg1NQukpo_p8TO4OvtK9T2Q91g=w663-h884-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHe0qyJOEOzRaGUr258X2w6ioIjkHmBDTcaIPrpD706O11z9eMMOfRAfQJ4yxwAWkiTbFG3YrxGLegdBw-dwS2qh50u2go3loMMTC0A06RgqZKGpWkQlKAa0cCZ-dayKgJnlYv881I-pyfesL7oyu5jOe1DFVA-OK5Co7tUZkK7sZu3hV-UwBQ3wmr9O19FuNvdg5mXp4FG32Rbsh8CjCI70dzKWVM4jB0LCF_yKC0HBNpbkI2Wsp92Ahn7WKUvVN6NlmkOjHftqLOTazf-WSo37ngNGKlYtGJlciwbUuloePzMrVIyZ_DbpSZx6W6ZRZqlh-mGIBUGw2MvP0t6Uc1oG_NLMnDHQF3dMb730TU6oiUvy1b9JyNrysjiOoZTzIdh6w0SLu_TfUBVLXNfPXeALumRy4oqqm8dLsaDTruwN-szmjZ37ukfk0ur0sBRJswu97sWBUyUMMQzsZNSuBk8MjCZYTU80_9Sc3z2_nOEcUXRkGo-Cq7zricw1lLA7SSMnMTNjfHBhZikdWbQywKq1qlDiTK2YjKYcjlhRmZmLqIfNc0ubv6ls5j8FTHD_g7c1XuKM7XAPf7DL-YOmHFVJeW9VEmWbmJkA-7n32OcBBWGqh0gsBb-cYg3Sezr5A4BZOOr8cgtaLnLLkbf-2c-U2jh5URYP0Wb8lKGyf6NZyGGlu-UOPgp5pATImTI9Z0O7qr4u6iCI1QZikDz8vbl-jWDn1srIYjKxFOsMBTJKdqz1oKIu9jBE2sZlmSU9tvZ4oyWDwZo6UYeHMYLZxxJyO9blW0ThgRCKtZOD2gqsRWuDJcQ-8ahVRXU-novUzbqjczvLCQIJkRgp8qJ6_8vuoxZ3pG2zZv0WcLKfiWHyz2D1UjpD_iR93J6FyGq6JUE=w1000-h667-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHfo0kOxizVaRCdSv56_P1AornuJDInEZ5PIk-ldGCvvt1lMyfblp7WjxJX1OFaADLqjsff6K1M2jGVpicvmct2RUwaIJmjpno8yBV_KC0f4MS830HqXokl9RL2aUCnMKxHTibwtYtrmR-OpVWrD1c5gWGPE6olGN4D3IrFnBvyapzC0xw4oBiUizP0UIVuhoFFr0iKt7xhGq6O0tx3tIKMAeAeHFiM1puWQ-aI5Zb2HNGjBqEgKux5ttS2VzY9aigi7JpjnDgMVIlsW-ZRTdy3HM5IJZqaW-zO7F_iqe1umLtfFpSfkQ_gj3zZDATPhcNz5I15Zmr5TpIk9EiY5YCRZgsDoGpUp5bCRIpfBBkcm_QABBKYZ3wcIfDZvGp925Q61kn6qxapvQgIlt_LbSae0CR-ED8i6g0sbgUC7ixRPXXtmEGO4Wcw4-OOd_T6gcyjpS7f4pEVEIAReX7r-E501p460OefWNbMBMinn8Jt2lq5lCdEbj0xzKkMSsMkvAW0XjmJcTvbavc9_GqCmD3L78k-RPpOA0hSfMnkrzKOpwLu3l8HGP1q4oh7iTgLFy3NP2ejfDAGC0rjazIhQNnegqE2DQqQuL_gTqu62_V5kvj8KHkp5oOu6KkZ0wSptFBrA2iZLGpw5Cy_29sQTZR2IF6NsHwafG-hAFyNvwsShrmRhCZGmGdtUEr-1P6fwP3RiDaZp6vlWMHxvnsrQYvE-F_27MV7qvxDH7PpCp_tDBBnoMpi0kPNwQMRR8gnMSlxx79b5jilZzehV-gMq4DikgG5kBWq15oqN2P7XrZWODnJjBLp6nAHwHyPKvIfflQmEhoL1nDOeW88V1KFlDmD-i5GVhpdQyu0GvsADasNTnEJwx9Do-4S-Cf6GMsFw90s=w1000-h667-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHfHfI5G29BH19D9PM7K-2KUAt1PzFniXywYmu6UPt0-ebasor2D9s0ipIMZByhG2Vvwut7Ug66usPg9Q61SbdWTzk50F86kgXNC_BerqBMtlwVV2g0ShZO4J4VvHihF-tWbUcWbwDUzdXyDkoQ5DoqUI8XJLIRDeXHehPjAv3bVrGNPhAMIDVRFpYseIzU7-JViBe1MSjuFnQpKxaRVTHT1uWvS8BdZsI_4A1be0JL7kYuOHNR9iDYBpMJLv0COenzx4JmV-l1-HRdj_ne8baRAqeAK6XmIrGl0565houxfBG2ycdPpeK0yzIdscKsyv2gwpFjVTwOc2tGKYAWLLYYtPduEoBFF-RXadUUhl_L4CKgGyXHKgzzhJ2NMf64BJJ4FsDJL-2kEL62ZYj8lspznagnoTxTJB7tUxMUdn9VCJlX3k6Xdia2eT4xwk0Ixj2MtD-jHKwICFKAwiEbfU9vwhlpECLOXQd67k8oWPoHf1MaGikm3GnvaOitNKd5aFuGvwx3OADFY85QCO9wMTLEgOpiZsD__p11hs15QJHvqU-buyhBf00jCSdUp5sNOznUynnuiJVXIFmMB0k_EocszXMBT75QIGEFJ2B9D37NQMdfV5bTTfcn0ICqbCKUmImfNrxXejWDdX1p5L2UI53rw8ANBg4KqeWFkTKDVCTRUHbHkW4f5t5GxeLGyKbQh9Q79OzJDqCOd3XezPfthS6ud-yICTkFQLTKdf07gPvYxxIz_WlO8J6v15LMcorZcoH0GXZLjOyz6bj_GKxWUDlhwpOeDOsqNEYwFar8yBLlRH8WRDX7Gs0NZgRVwxx77s3tUV2pr8AYtoTYRdF_y1tDv-Qq-GqQQiFj0DXBmKGgSSCaPk4TKW31ZbjtRqr5HyC8=w1000-h667-s-no-gm?authuser=0",
    alt: "imagem Jansen & Jordânia",
  },
];

const App = () => {
  const [image, setImage] = useState(0);

  const nextImage = () => setImage((i) => i === images.length - 1 ? i : i + 1);
  const prevImage = () => setImage((i) => i === 0 ? i : i - 1);

  const img = images[image];

  return (
    <div className="App">
      <div className="title">
        <i class="fa-solid fa-heart fa-beat"></i>
        <h1>Jansen e Jordânia</h1>
        <i class="fa-solid fa-heart fa-beat"></i>
      </div>
      <div className="buttons">
        <button onClick={prevImage}>
          <i className="fa fa-arrow-left"></i>
        </button>
        <button onClick={nextImage}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="images-container">
        <img src={img.url} alt={img.alt} />
      </div>
    </div>
  );
}

export { App }
