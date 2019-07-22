const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=ZbUACwAAQBAJ&dq=title:the+dead+zone&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73ouejc84gYUE6P_uL0fEmP8K-fU5b2tF88wARIJO6bKpbSh0rjEseOLJG6hW7eMMUCc-wHnJiWjsVIxm99c256D0PAgO2hXOxDyU0LThK6Uyqr8ZWvK5vV2IT0YTOH7_iDC-QH"
  },
  {
    title: "Lord of the Flies",
    authors: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=iyfgqV5dxXQC&dq=lord+of+the+flies&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71kltiXI6yiZ2RKHwUJESbRUDt9Fmz9DZjEc8PFACW5lyGbdA8mDVfs9tIy00UcDtWSCXxYexQv3YvAL-iEUuyXHZK60GUleG0MDwtz07YFLZJ_aHardRsDiM5f0MyHZxmZmXuj"
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=e1UwswEACAAJ&dq=catcher+in+the+rye&hl=en&sa=X&ved=0ahUKEwj6qbDJ8cbjAhVK4qwKHXOrBR0Q6AEIMzAC",
    image: "https://books.google.com/books/content?id=e1UwswEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE725angPRacEBAMczJprPv_f21Xke3D6Lm3GbLf0Ic4zDOh6Vc9BwYauFmncheJtIqZPPVxhNwkMlKDfqc7IUFZ21oDoMtNB3frs7ubTrI4up6wAlJWC8EKEPKid9mgkFkxdtmmt"
  },
  {
    title: "The Punch Escrow",
    authors: "Tal M. Klein",
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=wns3DwAAQBAJ&dq=the+punch+escrow&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=wns3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73UEFBp5jeBhBhC-J5OFU2sUuV-f1tyQ5ZgeBR1rtLzV1_zMyq7QGFPPTrXgXWiqLTLTHhle8NVsB01lDkJCTXvbvP4wSajmLjLbT5I469cL6s5RnsNzckt3LSqNgZgnyAS_7Vl"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    authors: "J.K. Rowling",
    description:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=wrOQLV6xB-wC&dq=harry+potter+and+the+sorcerer%27s+stone&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70vkRmVXYZgJ9wOkSXPgSpK6VC2B9x7w8Ut1sEQtdEJohyFS-lSs1dVnEBs9jAXDYI117h7UeZV59uzXCQWgtBf1rCxRy-wMqMPG_qhhiMqeDl-JTE6zOVgwhNdMNfkkotRXazh"
  },
  {
    title: "Coraline",
    authors: "Neil Gaiman",
    description:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=C8NVhWNU_uIC&dq=coraline&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71OxxRKBdLmpQMEFS0g0ZC26aHiXI_oV-3g4zs3SlqlqqG8DF-1IgvuBMDA4Cs_TuWZ9EWX0lSpSQIablc_J2Yw8J3Q9ZTwbBlm62sD4azaoRIPaC2Oy2sFp_f2swdDJ9_Bo--r"
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    authors: "Charles Petzold",
    description:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=iptCAwAAQBAJ&dq=code+the+hidden+language+of+computer+hardware+and+software&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70A76u_VBfcjefXXr03ENs117hJstLMAXofuRDU1zJXB2jpmthTLGVslderp4n06Led-7o_6hsPFhYtoPEaXKxyEsqyl1qIOpFd4iAWa8Z_HmyVvyxXL3Ffwv3GUZv9-_hf18c_"
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    authors: "Brad Stone",
    description:
      "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=t95iRvivDHIC&dq=the+everything+store&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=t95iRvivDHIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72wRl5EVgJ23h6eZ5nor8-pUQD4DXWX_HsutO1xA19UitpgLuSUoy7wNhuo04AIBS9DZwTRTjP8wPE6ZXCk5PMAN9M8jwiYvrhnZ-zcNd2-xSdK0_NXFHxtgR0YGG0cUkzVt77X"
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    authors: "Arnold Schwarzenegger",
    description:
      "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=ZvojgDyjYM4C&dq=total+recall:+my+unbelievably+true+life+story&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=ZvojgDyjYM4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE730vv9VVh_kmIAVscoL5cG4VJTbo_lgIpmrgfep8mK0tKptRSrBnetuvHs3GAGbolEthltidxxz1SUnAdJG7eoCzGO_7PGQaNV6lzA0fZ3uzfDLPznwXUeQV7MFjRchnFXn9fbp"
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    authors: "Ashlee Vance",
    description:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=Ma4sjwEACAAJ&dq=elon+musk&hl=en&sa=X&ved=0ahUKEwizyv-U88bjAhVHOK0KHV8RDcoQ6AEIKjAA",
    image: "https://books.google.com/books/content?id=Ma4sjwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72wVo5jNVnygGW9YA_blrCiKKS_AOsme2OYP7GfKxYMa9a9u6y78XtMLUnOso4Twp87HF0zJLHYqYy9j2Y48JKBbcxeaSl-Aynde1nvGi8Lfgj4Tcaecd7wLXwCgXIxHvuyy1SU"
  },
  {
    title: "Steve Jobs",
    authors: "Walter Isaacson",
    description:
      "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the 21st century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes,and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple's hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=8U2oAAAAQBAJ&dq=steve+jobs&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE728DdxRBm1uwxlA6m1ydaZP8JNp0GDnW1Ia678nl_0IJ5r-ocZn41IzDqU3Y4yL0hgUWnYQWA5_TUdRwLoql1XlLxvQQTCChbgQFjqzJBfOSoq9xuoN5e5JySeLBcDI1EOCD0DP"
  },
  {
    title: "Astrophysics for People in a Hurry",
    authors: "Neil deGrasse Tyson",
    description:
      "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in digestible chapters consumable anytime and anywhere in your busy day. While waiting for your morning coffee to brew, or while waiting for the bus, the train, or the plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=WkZmDwAAQBAJ&dq=astrophysics+for+people+in+a+hurry&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=WkZmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7166N1efpDUcdw8FFPiY5q_X1I57YRZM6OUabuJr_G2MrJ7XNPAR1uX-vfyTL0XXmSgzrQfCrH7YaiRPnj_4lwij6rm-OUpSAphpMxOY171KH-9dydqrua_f8aPUwCz9MWX5g30"
  },
  {
    title: "1984",
    authors: "George Orwell",
    description:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=VO8nDwAAQBAJ&dq=1984&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=VO8nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73XNrL4lpAYWa5hKUcKhhHuDjYDfK0a0u71tCRmPS21vJk6MRkZSuzWX-rIuQbHIya9gaYmLM2XJM2Sq-RsmIdsOdua9eE4sJyo142NTPpvqwn2iPz5zssA9qgC5Y-pYnpF6EI1"
  },
  {
    title: "Frankenstein",
    authors: "Mary Shelley",
    description:
      "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=cYmL9SQWCz0C&dq=frankenstein&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=cYmL9SQWCz0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73X6ACyu4-uWu0KIhLha7GdaiELWkHis6am4h3-eQS0G0gdnrMnC4vR8uJ6CO0LC0kGx-74a_PxFmK7-xuQRaXioH-b6O173MTXAzWTqSdsRUcA7kjq-EqCllQoXQrVdKUIZjbt"
  },
  {
    title: "The Great Gatsby",
    authors: "F. Scott Fitzgerald",
    description:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=iXn5U2IzVH0C&dq=great+gatsby&source=gbs_navlinks_s",
    image: "https://books.google.com/books/content?id=iXn5U2IzVH0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE718NZVOr-QUkln-IqQuvapJ6759tPbK8WAnxJ5DjjmuFXSAYjjjX7aMzlTTlJRmdJ2lXSLE38aJE1MOqAeH5WmVAlJabYDiff87gCDyM09vQPHSf6Sz4455uDVun-HRCJpUSqic"
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    authors: "Trevor Noah",
    description:
      "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
    date: new Date(Date.now()),
    link: "https://books.google.com/books?id=TAhGnQAACAAJ&dq=born+a+crime&hl=en&sa=X&ved=0ahUKEwi1xZeT9MbjAhWlna0KHQL4Cd8Q6AEIKjAA",
    image: "https://books.google.com/books/content?id=TAhGnQAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70oE1okn7emqhhjUZP9t4dCvkxz1XpiKpHVXIMS0hDj604fE6P4xbQuwZnV3qr99Y1UBCAU-eau5v0vQGsc_pSN-Xu_Gv48MdNIH7VuNHjv0Evz3PU3-PSt_0iCeRJBG2N0-dSG"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
