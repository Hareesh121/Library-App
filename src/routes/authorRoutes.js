const express = require('express');
const authorsRouter=express.Router();
function router(nav){
    var Authors=[{ 
        // title: 'MISSOULA',
         Author:'J K ROWLING',
         Genre	:'Genre: Fantasy',
                  Description:'Joanne Rowling,( born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history.The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films.She also writes crime fiction under the pen name Robert Galbraith.',
                  img:'jk.jpg'
            
            },
        
{ 
    // title: 'MISSOULA',
     Author:'JON KRAKAUER',
     Genre	:'Genre: Outdoor literature',
              Description:'Jon Krakauer (born April 12, 1954) is an American writer and mountaineer. He is the author of best-selling non-fiction books—Into the Wild; Into Thin Air; Under the Banner of Heaven; and Where Men Win Glory: The Odyssey of Pat Tillman—as well as numerous magazine articles. He was a member of an ill-fated expedition to summit Mount Everest in 1996 one of the deadliest disasters in the history of climbing Everest.',
              img:'auth8.jpg'
        
        },
        {  
            
            // title: 'How to Become a Straight-A Student',
        Author:'DAN BROWN',
        Genre:'Genre: Thriller, adventure, mystery, conspiracy',
          Description:'Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages around the world with 200 million copies in print. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films.',
          img:'auth2.jpg'
        
        },
        {
            
            // title: 'Three Cups Of Deciet',
        Author:'CAL NEWPORT',
        Genre:'Genre: Self-Improvement',
          Description:'Calvin C. Newport (born June 23, 1982) is an associate professor of computer science at Georgetown University and the author of six self-improvement books. He writes the Study Hacks blog, which is focused on academic and career success.Newport completed his undergraduate studies at Dartmouth College in 2004 and received a Ph.D from Massachusetts Institute of Technology (MIT) in 2009 in computer science under Nancy Lynch. He was a post-doctoral associate in the MIT computer science department from 2009-2011.',
          img:'auth9.jpg'
        
        },
        
        {
        // title: 'A Clean, Well-Lighted Place',
        Author:'F. SOTT FITZGERALD',
        Genre	:'Genre: Novel, Tragedy, Historical Fiction',
          Description:'Francis Scott Key Fitzgerald (September 24, 1896 – December 21, 1940) was an American novelist, essayist, screenwriter, and short-story writer, although he was best known for his novels depicting the flamboyance and excess of the Jazz Age—a term which he coined. During his lifetime, he published four novels, four collections of short stories, and 164 short stories. Although he temporarily achieved popular success and fortune in the 1920s, Fitzgerald only received wide critical and popular acclaim after his death. He is widely regarded as one of the greatest American writers of the 20th century.',
          img:'auth4.jpg'
        
        },
        
        {
            // title: 'Finding Everett Ruess',
            Author:'RICK RIORDAN',
            Genre:'Genre: Fantasy,detective fiction,mythology',
              Description:'Richard Russell Riordan Jr. (born June 5, 1964)is an American author. He is known for writing the Percy Jackson & the Olympians series, about a twelve-year-old Percy Jackson who discovers he is a son of Greek God Poseidon. Riordans books have been translated into forty-two languages and sold more than thirty million copies in the US. 20th Century Fox has adapted the first two books of his Percy Jackson series as part of a series of films. His books have spawned related media, such as graphic novels and short story collections.',
              img:'auth5.jpg'
            
            },
        
            {
                // title: 'Notes from The Century Before',
                Author:'SUZANNE COLLINS',
                Genre	:"Genre: Fantasy, science fiction, children's literature, young adult fiction, dystopian fiction",
                  Description:"Suzanne Collins (born August 10, 1962) is an American television writer and author. She is known as the author of The New York Times best-selling series The Underland Chronicles and The Hunger Games.uzanne Collins began her career in 1991 as a writer for children's television shows. She worked on several shows for Nickelodeon, including Clarissa Explains It All, The Mystery Files of Shelby Woo, Little Bear, and Oswald.",
                  img:'auth6.jpg'
                
                },
        
                
        
                {
                    // title: 'In the Land of White Death',
                    Author:'GEORGE R.R. MARTIN',
                    Genre	:'Genre: Science fiction, Horror, Fantasy',
                      Description:"George Raymond Richard Martin (born George Raymond Martin; September 20, 1948),also known as GRRM,is an American novelist and short story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He wrote the series of epic fantasy novels A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones (2011–2019).In 2005, Lev Grossman of Time called Martin 'the American Tolkien',and in 2011, he was included on the annual Time 100 list of the most influential people in the world.",
                      img:'auth7.jpg'
                    
                    },
                    
                    {
                        // title: 'Into the Wild',
                        Author:'JOHN GREEN',
                        Genre	:'Genre: Young adult fiction, bildungsroman, romance',
                          Description:"John Michael Green (born August 24, 1977) is an American author and YouTube content creator. He won the 2006 Printz Award for his debut novel, Looking for Alaska,and his fourth solo novel, The Fault in Our Stars, debuted at number one on The New York Times Best Seller list in January 2012. The 2014 film adaptation opened at number one at the box office.[4] In 2014, Green was included in Time magazine's list of The 100 Most Influential People in the World.Another film based on a Green novel, Paper Towns, was released on July 24, 2015.",
                          img:'auth92.jpg'
                        
                        }
    
    
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("Authors",
       { nav,
           title:'AUTHORS',Authors
    });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id= req.params.id
        res.render('Author', {nav,
        title:'library',
        Author:Authors[id]
    });
    });

    return authorsRouter;
}



module.exports=router;