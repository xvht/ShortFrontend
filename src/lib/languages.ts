interface Language {
  text: string;
  author: string;
}

export const getLanguage = () => {
  const userLang = navigator.language ?? "en";
  const langCode = userLang.split("-")[0] ?? "en";
  return languages[langCode] ?? languages.en;
};

const languages: Record<string, Language> = {
  en: { text: "Shorten a URL", author: "Made with 💜 by " },
  ja: { text: "リンクを短くする", author: "作成者 " },
  de: { text: "Eine URL kürzen", author: "Erstellt von " },
  zh: { text: "缩短链接", author: "由以下人员制作 " },
  ru: { text: "Сократите ссылку", author: "Создано с любовью " },
  ar: { text: "اختصار رابط", author: "صنع بحب بواسطة " },
  fr: { text: "Raccourcir un lien", author: "Créé avec 💜 par " },
  fi: { text: "Lyhennä linkki", author: "Tehty rakkaudella " },
  es: { text: "Acortar un enlace", author: "Hecho con 💜 por " },
  pt: { text: "Encurtar um URL", author: "Feito com 💜 por " },
  ca: { text: "Acortar un enllaç", author: "Fet amb 💜 per " },
  no: { text: "Forkorta en URL", author: "Laget med 💜 av " },
  sv: { text: "Forkorta en URL", author: "Skapad med 💜 av " },
  da: { text: "Forkort en URL", author: "Lavet med 💜 af " },
  cs: { text: "Zkrátit URL", author: "Vytvořeno s láskou " },
  tr: { text: "URL kisalt", author: "💜 ile yapıldı " },
  vi: { text: "URL rút gọn", author: "Được làm bởi 💜 " },
  zh_HK: { text: "縮短網址", author: "由以下人製作 " },
  pl: { text: "Skróć URL", author: "Stworzone z 💜 przez " },
  is: { text: "Skráti hlekk", author: "Búið til með 💜 af " },
  hu: { text: "Rövidítsd az URL-t", author: "Készítette: " },
  sk: { text: "Zkraťte adresu URL", author: "Vytvorené s láskou " },
  zh_TW: { text: "縮短URL", author: "由以下人製作 " },
  az: { text: "Kısaltılmış URL", author: "💜 ilə hazırlanmışdır " },
  he: { text: "קצר כתובת URL", author: "נוצר באהבה על ידי " },
  mt: { text: "Berkóti URL", author: "Magħmul b'💜 minn " },
  sl: { text: "Zkraťte URL", author: "Narejeno z 💜 od " },
  ku: { text: "URL de kısaltın", author: "💜 ile yapıldı " },
  sr: { text: "Uglovi URL", author: "Napravljen sa 💜 od " },
  ig: { text: "URL pụta", author: "Kere nke 💜 site na " },
  yo: { text: "URL ti fa ṣoki", author: "Ṣe pẹlu 💜 nipasẹ " },
  ha: { text: "URL kọmpọt", author: "An yi da 💜 ta " },
  ht: { text: "Kouto yon URL", author: "Fè ak 💜 pa " },
  zu: { text: "Skracovať URL", author: "Kwenziwe ngothando 💜 ngu " },
  xh: { text: "Ukuchoboza i-URL", author: "Kwenziwe ngothando 💜 ngu " },
  sw: { text: "URL ngắn hơn", author: "Imeundwa kwa 💜 na " },
  sw_KE: { text: "Urefu wa URL", author: "Imeundwa kwa 💜 na " },
};
