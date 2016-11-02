var quotes = [
	"Clenette Henderson clutches another black girl and laughs and says 'Girl!' several times.", 
	"'Why " + "not".italics() + "? Why " + "not".italics() + "? Why not " + "not".italics() + ", then, if the best reasoning you can contrive is why not?'",
	"The Union of the Hideously and Improbably Deformed was unofficially founded in London in B.S. 1940 in London, U.K., by the cross-eyed, palate-clefted, and wildly carbuncular wife of a junior member of the House of Commons, a lady whom Sir Winston Churchill, P.M.U.K., having had several glasses of port plus a toddy at a reception for an American Lend Lease administrator, had addressed in a fashion wholly inappropriate to social intercourse between civilized gentlemen and ladies... W. Churchill—when the lady, no person's doormat, informed him with prim asperity that he appeared to be woefully inebriated—made the anecdotally famous reply that while, yes, yea verily, he was indeed inebriated, he would the following A.M. be once again sober, while she, dear lady, would tomorrow still be hideously and improbably deformed.",
	'Tarango, 27, who completed three years at Stanford, is regarded as something of a scholar by Joyce and the other young Americans on tour. His little bio in the ' + '1995 ATP Player Guide'.italics() + ' lists his interests as including "philosophy, creative writing, and bridge," and his slight build and receding hairline do in fact make him look more like an academic or a tax attorney than a world-class tennis player.',
	'It\'s the time of the third and fourth rounds, the tuornament\'s meat, the time of trench warfare and polysyllabic names.',
	'A lady making her way in that sideways-processional way past seats in the row right beneath me wears a shirt advising all onlookers that they ought to Play Hard because Life is Short.',
	'There is indeed about the Stadium crowd down here something indefinable that strongly suggests Connecticut license plates and very green lawns. In sum, the socioeconomic aura here for the day\'s headline match is one of management rather than labor.',
	'Two older guys in the row right behind me are exhorting Sampras in low tones, addressing him as "Petey," and I can\'t help thinking they\'re friends of the family or something.',
	'The ballboys... looking more like ball-' +'grad-students'.italics() + ', here, actually...',
	'He has his cellular phone in his hand, leaning over the ticket-taker: ' + 'surely'.italics() + ', he insists, there\'s some way to verify his ticket-holding status without his going and coming all the way back to produce the actual stupid cardboard rectangles themselves. The ticket-taker, in a blue suit that makes him look a bit like a train\'s conductor, is shaking his gnarled little head and has his arms raised in that simultaneously helpless but firm gesture of Can\'t Help You, Mac.',
	'The top seed this weekend is Richard Krajicek, a 6\'5" Dutchman who wears a tiny white billed hat in the sun and rushes the net like it owes him money and in general plays like a rabid crane.',
	'There are very few paying customers on the grounds on Saturday, but there are close to a hundred world-class players: big spidery French guys with gelled hair... bored-looking Italians... blank-eyed Swedes... malevolent Slavs with scary haircuts.',
	'Starting on Monday there are a lot of Canadian girls in really short tight shorts and a lot of muscle-shirted Canadian boyfriends who scowl at you if you react to the girlfriends in the way the girlfriends\' tight shorts seem designed to make anyone with a healthy endocrine system react.',
	'Michael Chang, 23 and #5 in the world, sort of looks like two different people stitched crudely together: a normal upper body perched atop hugely muscular and totally hairless legs. He has a mushroom-shaped head, ink-black hair, and an expression of deep and intractable unhappiness, as unhappy a face as I\'ve ever seen outside a Graduate Writing Program.',
	'[He has] soulless eyes that reflect no light and seem to "see" only in the way that fish\'s and birds\' eyes "see."',
	'I invited the girl for a coffee, or a Tab, years ago, right at the start, and she gave me this haunting, moisture-inducing look. Then tells me she could never imbibe caffeine with a man who wore a digital watch. The hell she says. She gave me the finger on national television.',
	'...the girl got adopted by some people who were not, from the sense I got, princes among men...',
	'He smiles with his mouth but not with his eyes.',
	'Alex buys a car so expensive he\'s worried about driving it.',
	'A mailman in mailman shorts and wool knee socks sits eating his lunch...',
	'A very large man walks by, his face red as steak, his cowboy boots new, a huge tin star pinned to the lapel of his business suit.',
	'The two women stand and watch distant mountains become Hershey kisses in an expanding system of shadow.',
	'She looks at a small child methodically punching a mild-faced father in the back of the thigh while the father buys Haagen-Dazs from a vendor.',
	'Little bits of Los Angeles wink on and off, as light gets in the way of other light.',
	'Sajak says he\'s forgotten all about it, and calls Trebek big fella; and there\'s some towel snapping and general camaraderie.',
	'I notice them and come over to watch only because Hlasek and Rosset are so beautiful to see; at this point I have no idea who they are. They are practicing groundstrokes down the line—Rosset\'s forehand and Hlasek\'s backhand—each ball plumb-line straight and within centimeters of the corner, the players moving with the compact nonchalance I\'ve since come to recognize in pros when they\'re working out: the suggestion is one of a very powerful engine in low gear.',
	'...watching him practice is like watching a great artist casually sketch something.',
	'There are a million little ways you can tell somebody\'s a great player--details in his posture, in the way he bounces the ball with his racquet-head to pick it up, in the casual way he twirls the racquet while waiting for the ball.'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
