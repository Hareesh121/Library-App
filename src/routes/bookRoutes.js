const express = require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[



      { title: 'Harry Potter',
      Author:'J K Rowling',
        Description:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
        img:'hap.jpg'
  
  },
        
            { title: 'Missoula',
            Author:'Jon krakauer',
              Description:'In these pages, acclaimed journalist Jon Krakauer investigates a spate of campus rapes that occurred in Missoula over a four-year period. Taking the town as a case study for a crime that is sadly prevalent throughout the nation, Krakauer documents the experiences of five victims: their fear and self-doubt in the aftermath; the skepticism directed at them by police, prosecutors, and the public; their bravery in pushing forward and what it cost them. These stories cut through abstract ideological debate about acquaintance rape to demonstrate that it does not happen because women are sending mixed signals or seeking attention.',
              img:'miss2.jpg'
        
        },
        {  title: 'How to Become a Straight-A Student',
        Author:'Cal Newport',
          Description:'Most college students believe that straight As can only be achieved through cramming and painful all-nighters. But Cal Newport knows that real straight-A students don’t study harder—they study smarter. A breakthrough approach to acing assignments, from quizzes and exams to essays and papers, How to Become a Straight-A Student reveals the proven study secrets used by real straight-A students across the country.',
          img:'cal4.jpg'
        
        },
        { title: 'Three Cups Of Deciet',
        Author:'Jon krakauer',
          Description:'Greg Mortenson, the bestselling author of Three Cups of Tea, is a man who has built a global reputation as a selfless humanitarian and children’s crusader, and he’s been nominated for the Nobel Peace Prize. But, as Jon Krakauer demonstrates in this extensively researched and penetrating book, he is not all that he appears to be.Based on wide-ranging interviews with former employees, board members, and others who have intimate knowledge of Mortenson and his charity, the Central Asia Institute, Three Cups of Deceit uncovers multiple layers of deception behind Mortenson’s public image.',
          img:'pic3.jpg'
        
        },
        
        {
        title: 'A Clean, Well-Lighted Place',
        Author:'Jon krakauer',
          Description:'Here is Jon Krakauer’s portrait of the iconoclastic architect Christopher Alexander, whose revolutionary human-centered approach has shaken the foundations of modern architecture. Krakauer delves into Alexander’s life and career, from his theories on a timeless “pattern language” that could be used to create buildings and towns that were simultaneously more livable and more beautiful, to his belief that architecture is correctly viewed as a powerful social instrument; from his on-site drafting techniques to his design process that, like a cocoon, shapes a building from the inside out.',
          img:'pic4.jpg'
        
        },
        
        {
            title: 'Finding Everett Ruess',
            Author:'David Roberts',
              Description:'Finding Everett Ruess by David Roberts, with a foreword by Jon Krakauer, is the definitive biography of the artist, writer, and eloquent celebrator of the wilderness whose bold solo explorations of the American West and mysterious disappearance in the Utah desert at age 20 have earned him a large and devoted cult following. More than 75 years after his vanishing, Ruess stirs the kinds of passion and speculation accorded such legendary doomed American adventurers as Into the Wild’s Chris McCandless and Amelia Earhart.',
              img:'pic5.jpg'
            
            },
        
            {
                title: 'Notes from The Century Before',
                Author:'Jon krakauer',
                  Description:'In 1966, Edward Hoagland made a three-month excursion into the wild country of British Columbia and encountered a way of life that was disappearing even as he chronicled it. Showcasing Hoagland’s extraordinary gifts for portraiture—his cast runs from salty prospector to trader, explorer, missionary, and indigenous guide—Notes from the Century Before is a breathtaking mix of anecdote, derring-do, and unparalleled elegy from one of the finest writers of our time..',
                  img:'pic6.jpg'
                
                },
        
                
        
                {
                    title: 'In the Land of White Death',
                    Author:'Jon krakauer',
                      Description:"In 1912, six months after Robert Falcon Scott and four of his men came to grief in Antarctica, a thirty-two-year-old Russian navigator named Valerian Albanov embarked on an expedition that would prove even more disastrous. In search of new Arctic hunting grounds, Albanov's ship, the Saint Anna, was frozen fast in the pack ice of the treacherous Kara Sea-a misfortune grievously compounded by an incompetent commander, the absence of crucial nautical charts, insufficient fuel, and inadequate provisions that left the crew weak and debilitated by scurvy.",
                      img:'pic7.jpg'
                    
                    },
                    
                    {
                        title: 'Into the Wild',
                        Author:'Jon krakauer',
                          Description:'In April 1992 a young man from a well-to-do family hitchhiked to Alaska and walked alone into the wilderness north of Mt. McKinley. His name was Christopher Johnson McCandless. He had given $25,000 in savings to charity, abandoned his car and most of his possessions, burned all the cash in his wallet, and invented a new life for himself. Four months later, his decomposed body was found by a moose hunter.  How McCandless came to die is the unforgettable story of Into the Wild.',
                          img:'pic8.jpg'
                        
                        }
    
    
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",
       { nav,
           title:'Books',books
    });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id= req.params.id
        res.render('book', {nav,
        title:'library',
        book:books[id]
    });
    });

    return booksRouter;
}



module.exports=router;