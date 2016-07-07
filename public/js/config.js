/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var EMOTION_API_URL = "/api/v1/analyze";

var SAMPLE_TEXT = "Usually, I am a huge fan of Westville and go pretty often. However my last trip with three of my good friends at 8:30 ended on a rough note. After enjoying our wine, meal, and desert they tell us that the credit card machine is not working and that it would only take a few extra minutes to go through. We continued to sit and talk thinking we would be out of the restaurant no later than 10. Almost an hour goes by and still the machine is broken. At that point our waitress and manager tried to push us to walk down the street to go to the ATM and take out cash. This made things very complicated because only two of us had an ATM card, while the other two had a credit card. The other option they gave us was to write down our credit card information and charge us when the machine started working. IN NO WAY would I want to leave that information with a stranger for them to use freely. At that point we all became very frustrated. Finally at 11pm (this is also a week day that all four of us have full time jobs) one of us gives up and goes down the street in the cold to take out cash. I am extremely disappointed in their lack of customer service. Not only did the staff not seem empathetic or apologetic, but there was nothing done for us as a result of us waiting. They could have easily comped the drinks we ordered, or the desert. But nothing. After waiting for an hour for your card to go through SOMETHING should have been done. Instead we kept hearing  there is nothing we can do  and  it isn't our fault.  In my opinion and experience, restaurants should put the customer first, being mindful of their time and energy. Additionally, I work in customer service and I would have handled the situation completely differently. I would have offered a round of drinks while my customers waited, given a gift card as an apology. SOMETHING to ensure that my customers know how much they are valued. I am saddened that this terrible experience will stop me from going to one of my favorite spots in the city.\n" + 
"Thought I would come for dinner considering the very good reviews and the huge crowd in the week ends, but was much disappointed. We came in and sat at a table of two, the setting was nice. But then, they let a homeless person seat next to us. He just sat there for 15mn listening to his music and trying to talk to people, and not ordering anything. His presence was highly awkward... The waiters did not say anything or try to come pick an eventual order, and he left 15mn after. We then got our food and were pretty disappointed. the  special  pork tacos were completely cold, so we had them go back to the kitchen. They did not offer to keep my plate warm for 10mn and bring back the plates together. My marinated chicken was fine, but nothing exceptional, and I was forced to start eating because it was starting to be cold. I was almost done when the tacos plate of my mate came by and was cold once again... We left and bought a pack of M&Ms for dessert...\n" + 
"I am extremely disappointed in their lack of customer service. Not only did the staff not seem empathetic or apologetic, but there was nothing done for us as a result of us waiting. They could have easily comped the drinks we ordered, or the desert. But nothing. After waiting for an hour for your card to go through SOMETHING should have been done. Instead we kept hearing  there is nothing we can do  and  it isn't our fault.  In my opinion and experience, restaurants should put the customer first, being mindful of their time and energy. Additionally, I work in customer service and I would have handled the situation completely differently. I would have offered a round of drinks while my customers waited, given a gift card as an apology. SOMETHING to ensure that my customers know how much they are valued. I am saddened that this terrible experience will stop me from going to one of my favorite spots in the city.\n" + 
"cobb salad was the worst thing ive ever had. lettuce was salty and the chicken and bacon were hard as rocks. the blue cheese was super salty. none of that went well together- it was gross. the gazpacho soup was watery and spicy and nasty, could finish more than a few bites of both. FREAKING GROSS FOOD! plus the staff are inattentive and the glasses are super dirty...told him about it and i got the same glass back without the dry lipstick all over...except it was still on the rim....wth....not rude but definitely made me feel bad that he had to get me a new glass...thats not how customers should feel fyi. the space was just not very nice...\n" + 
"Sorry to say that I was disappointed meal overall. My friend suggested this place and I've always passed by it walking around the East Village. It's always busy here so expect a wait on a popular night. For starters, my friend and I ordered a platter of 4 vegetables--broccoli, bok choy, brussel sprouts, and green beans. I probably enjoyed the broccoli and green beans the most. The broccoli wasn't too special, but I definitely recommend the green beans--nice flavor and not overcooked (i.e., not soggy). I'm not a big fan of brussel sprouts and these did not make me like them--tasted bitter like it was undercooked. The bok choy just tasted like someone just got lazy and dosed it in hoisin sauce--not at all pleasing and I love my bok choy. I ordered the fish and chips because I was in a fish and chips kind of mood. The chips aka fries were fine. The fried fish filet--very odd flavor. The batter tasted like there was too much vinegar or something. The tartar sauce helped to mask the weird flavor, but it was still a struggle to finish my food. Service: Went here on a Sunday night and there was a slight wait. The servers were fine. I think most people enjoy Westville, at least the East Village location, because it's kind of an open space. Some seating outside and the windows are open so patrons can enjoy the fresh air.\n" + 
"This place is raved about - and serves great good - but the cleanliness and the service is terrible. I ordered in a salmon salad and I found the root of the lettuce inside my salad including all the mud etc. When I called they didn't believe me, asked to pickup the salad and only refunded me for the salad portion of my meal, not even the add-on for salmon! I can't begin to think about the kitchen as it must be so dark in their that they couldn't have seen it in the first place.\n" + 
"This place a little cute corner restaurant in Alphabet City. We went on a Sunday early afternoon, so expect a wait time. The hostess was so great! She really made an effort to get our table of 4 sat as quickly as possible. Our waitress was also incredible! She was very sweet and patient, and seemed to really know the menu. The Health Tea was good! It has fresh mint, lemon, ginger and a cinnamon stick- something I will definitely try at home. I ordered the Egg Scramble with Chorizo, Goat Cheese & Tomato. It comes with potato hash and toast. It was okay... I wish I had ordered the Brunch Special Rice Bowl or the Market Plate (which my friends let me try). Those were incredible. I will definitely be back for that Market Plate!\n" + 
"Omg! This is my new favorite place in alphabet city. Went here last night with one of my friends and was worried about it because I wanted to make sure they had some healthy stuff on the menu. Turns out I had NOTHING to be worried about, because 75% of the menu is healthy and delicious! I ordered the salmon with broccoli and greenbeans. Great portions :) the service was awesome too, as our waiter was very kind and gave great recommendations. Will be back again!\n" + 
"I wish i could give Westville East a better rating because I really liked my experience at the west village location, but doing so would be dishonest. with more space and a more accessible location (for me at least), i wanted to love westville east, but instead, my experience led me to question whether or not i ever really loved either location in the first place.\n" + 
"Oh Westville East, I love you and hate you so much...There's a lot to love about Westville; lots of healthy and tasty food options, market sides (I love that you can make a bunch of sides into a meal), well balanced menu, cute restaurant interior, delivery is fast half of the time. There's also a lot to hate; you will always have to wait to sit at the restaurant, the restaurant is extremely cramped, delivery takes forever half of the time, the food is pricey. Although I really don't love everything about this place, I am addicted to their beets, artichokes, Brussels sprouts, mashed potatoes and plantains. I can't stop wanting these items and no one else does it as good, or will serve this all to me on the same plate... So I guess I'm just going to keep coming back FOREVER.\n"
var FINAL_SCORE = 5.6;