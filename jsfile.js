globalThis.JSONquestions = [];
const bookshelf = `<div class="container">
            <div class="cuboid">
                <div class="cuboid__face cuboid__face--bottom"></div>
                <div class="cuboid__face cuboid__face--front"></div>
                <div class="cuboid__face cuboid__face--back"></div>
            </div>
        </div>
        <div class="books-container">
            <div class="book" onclick="location.href='Old2024/index2024.html';">Old Stuff 2024</div>
            <div class="book" onclick="openBook('Poli')">Поли</div>
            <div class="book" onclick="openBook('Tedi')">Теди</div>
            <div class="book" onclick="openBook('Dani')">Даниел</div>
            <div class="book" onclick="openBook('Questions')">Въпроси</div>
        </div>
        <div class="floor-thickness"></div>
        <div class="container">
            <div class="cuboid">
                <div class="cuboid__face cuboid__face--bottom"></div>
                <div class="cuboid__face cuboid__face--front"></div>
                <div class="cuboid__face cuboid__face--back"></div>
            </div>
        </div>
        <div class="books-container">
            <div class="book" onclick="openBook('Fight')">Боря се за вас</div>
            <div class="book" onclick="openBook('Misho')">Концерт/Мишо</div>
            <div class="book" onclick="openBook('Friends')">Приятел</div>
            <div class="book" onclick="openBook('Manipulator?')">Манипулатор</div>
        </div>
        <div class="floor-thickness"></div>`
function openBook(id) {
    const myDiv = document.getElementById("bookshelf");
    var text = ''
    switch (id) {
        case 'Poli':
            text = `<div class="reveal-text">
            &emsp; Поли беше един от най-хубавите подаръци, които живота ми поднесе. От това да говоря с нея за каквито и да е теми, до приключенията и пътуванията. Винаги се чувствах, че мястото ми е до нея. Винаги съм бил екстра мил с нея , защото ми идваше от вътре. Една прегръдка от нея гонеше и най-мрачните облаци в живота ми. Откривах толкова нови неща покрай нея. 
           <br>&emsp; Преди да почнем да се караме, а дори и след това, винаги си била артист от който бях изумен, жена която гледах с уважение и най-вече беше като моя сестра, която исках да опазя от всичко негативно в живота. Смятам че си по-силна и по-самостоятелна отколкото хората подозират, но инстинктът ми казваше да те пазя.
            <br>&emsp; След като започнахме да се караме наистина мислех, че е защото не съм преживял фактът, че сме просто приятели. Но дори и само като приятел си давам сметка, колко щастлив бях да те имам в живота си. Обожавах да пътувам с теб и твоите фотографски умения. Не само аз, но и други хора имаме високо мнение за теб. Не искам да те оставям на пиедестал, всички имаме свои недостатъци, но никога не бих изпъкнал твоите.
            <br>&emsp; Дори и някои неща да са започнали защото съм те харесвал, всичко бързо се обърна в това, да ти помагам и бутам напред в живота. Виждах голям потенциал в теб и невероятно бъдеще, надявах се и тайно си мечтаех да сме типа приятели, които 10-20 години по-късно все още да пътуваме заедно, да работим заедно и децата ни да израстнат заедно, като едно голямо семейство.
            <br>&emsp; Прости ми че понякога не съм те разбирал , че понякога грешах и създавах проблеми, не е било с лошо. Всички мои спомени с теб са прекрасни и позитивни, не мисля че някога сме били повече от приятели, но съм благодарен за всяко излизане, за всяка твоя усмивка, за всеки разговор и всеки твой арт. Апартамента ми все още стои празен на определени места, защото бяха предвидени за твоята комисионна, която исках да правя всяка година ако помниш. Не мисля да запълвам стените, нека стоят празни, да ми напомнят за какво изгубих и какво трябваше да стои там.
             <br>&emsp; Ти беше един прекрасен приятел, който ме научи на много неща, показа ми че мога да бъда щастлив и само с приятелство, и затова ще се боря за теб.
              <br>&emsp; Ще се боря с надеждата да мога отново да говоря с теб почти всеки ден, да видя усмивката ти, да слушам историите ти и да преоткривам света чрез твоите "магически" очи и камера.
               <br>&emsp;
                <br>&emsp; Дори и да ме мразиш, ще си те обичам платонично. Ти си моя сестричка.
                </div>`;
            break;

        case 'Tedi':
            text = `<div class="reveal-text">
            &emsp; Теди, моето приятелство с теб започна трудно, за първи път когато излязохме беше със Самито, аз току що се бях разделил с Даниела и почти не говорех, дори странях от вас. През годините открих за твоите артистични умения, видях творбите ти в старите ти акаунти и толкова се впечатлих от теб, че говорех наляво и надясно за момичето - артист.
           <br>&emsp; Винаги съм виждал каква невероятна жена си, но с времето научих и какъв страхотен човек си. Виждах колко усърдно работиш за да достигнеш (догониш) сестра си, а в някои отношения ти я беше дори надминала без да го осъзнаеш. На няколко пъти съм искал да поръчвам от теб артове без дори да сме близки и съжалявам, че нямах средствата да го направя. Твоите артове които в момента притежавам, ще пренасям от дом в дом през годините и ще пазя като семейна реликва.
          <br>&emsp; Твоите герои и истории винаги ме впечатляваха от това, че се разширяваха от далечната и мистична Азия , през класически фентъзи истории , до тъмни и мрачни места за които не бях говорил с никого преди теб. Приличате си в много отношения с Поли и въпреки това, се различавате и съм благодарен за твоето приятелство.
          <br>&emsp; Колкото повече те опознавах, толкова повече те обиквах. Съжалявам, че не бях достатъчно добър приятел спрямо теб. Съжалявам че понякога не те изслушвах по-внимателно или, че не се съобразявах повече с твоите желания.
          <br>&emsp; Беше прекрасен приятел и не се самозалъгвам, че сме били повече.
          <br>&emsp; Начина по който разказваше всяка история, някои от тях ги слушах отново и отново по десетки пъти, но всеки път оставях всичко за да слушам, защото всеки път изпитвах радост все едно ги чувам за първи път. Ти си един от най-трудолюбивите хора, които познавам, понякога си голяма упора на сестра си, понякога си най-емоционалната от трима ни. И не бих променил нищо в теб.
          <br>&emsp; Извинявам се ако в стремежа си да се грижа за теб и да те предпазвам съм прекалявал или прекрачвал граници. Извинявам се , ако съм навлизал в личното ти пространство, никога не е било с манипулативни или перверзни намерения.
          <br>&emsp; Ако имам дъщера един ден, надявам се да бъде точно като теб. Съжалявам за много неща и знай, че всяка тайна която си ми споделила, ще си остане между нас.
          <br>&emsp; Твой приятел ще бъда дълги години, дори и да ме презираш или изпратиш Melkor да ме преследва в сънищата.
          <br>&emsp;
          <br>&emsp; Ще продължавам да мечтая в това да преоткривам и пътувам света с теб.
          </div>`;

            break;
        case 'Dani':
            text = `<div class="reveal-text">
            &emsp; Какво да кажа за себе си? Въпреки това което смятате всички, не съм се опитвал да ви манипулирам или използвам. Знаех от самото начало колко съм емоционален, но никога не подозирах че две близначки, две момичета от Виница могат да означават толкова много за мен, че да ме е страх.
            <br>&emsp; Мога да постигна много неща и винаги съм имал нещо да ме води в живота като цел. За Мерито учех години наред с надежда да ѝ подсигуря по-хубав живот един ден. За Таня обикалях и най-странните места, сменях училища само за да бъда до най-добрият ми приятел. За Даниела пътувах почти всекидневно, за да изпълня желанията ѝ. Останалото постигнах в живота чисто с мисълта да не съм в тежест на никого.
            <br>&emsp; Но за Поли и Теди Илиеви бях готов да прекося всякакви граници за да ги подкрепя и прекарам време с тях. След като установихме с Поли, че ще сме само приятели имаше период в който доста плаках и тъгувах, но тя остана до мен и ме слушаше в мъката ми. Как да не се бориш за такъв човек след това?
            <br>&emsp; Винаги се опитвах да приема всеки ваш приятел, винаги тръгвах с добро и съжалявам че сгреших за Самито. Не исках да имате толкова малко приятели, с желание се опитвах да разширя кръгът ви от близки хора, може би се надявах така и аз да остана в този кръг. Никога не съм имал някакви "планове" да ви използвам, за целите и бъдещето винаги гонех две неща спрямо вас:
            <br>&emsp; - Да им помогна, да изградим тяхното професионално бъдеще.
            <br>&emsp; - Да ги опазя с надеждата да бъдем близки приятели и след пенсия.
            <br>&emsp; Виновен съм, че не успях да контролирам емоциите си след първият ни фестивал. Виновен съм, че не усях да намеря проблема по-рано. Макар в момента да мисля дали това щеше да промени нещо наистина? Сторих ужасни неща и ви "предадох" в даден смисъл, едва след като ви изгубих осъзнах всичко, имах възможност да разбера как се чувствам спрямо вас, но беше прекалено късно. Стореното беше сторено.
            <br>&emsp; В гнева си казах неща, за които още съжалявам, надявах се дълго време да разберете защо това ме нарани толкова. Но ще призная, че това е без значение, защото аз ви отвърнах и това прекрачи границите.
            <br>&emsp; 
            <br>&emsp; Желая да сте част от моят живот и аз да бъда част от вашият. И в друга "книга" ще обясня как се боря за вас.... ах да , това трябваше да е етажерка с книги .
            <br>&emsp; Ако исках да ви манипулирам, използвам или да се преструвам на ваш приятел, нямаше да се боря за вас в момента, нямаше да бягам от вас.
            <br>&emsp; Наистина , наистина се старая и не съм имал задни мисли или мрачни планове за вас... Нито съм мислел, че ще се стигне дотам, нито исках да се възползвам от вас, дори за уроците на Поли още ми е криво, наемаме от време на време хора и ми е гузно, защото наистина исках да ѝ помогна. В един момент се притесних да не би я да отдалечавам от мечтата ѝ, но говорех с нея за това и просто това! Не я манипулирах, притеснявах се да не би да ѝ вредя , докато искам да ѝ помогна. Затова съм предлагал и преди и пак ще кажа, вярвам във вас и съм готов да ви държа на заплати с договор и всичко, защото знам че ще надминете очакванията на всекиго ако имате просто възможността и средствата. 
             </div>           `
            break;

        case 'Misho':
            text = `<div class="reveal-text">
            &emsp; Мишо ми каза уж всичко което е станало ,когато "две момчета" са крещяли името му и след това. Но така и не сподели самият той  (Мишо), какво е казал. Не очаквам да си е признал пред непознати хора за нещо незаконно и престъпно. Не знам дали сте искали да ми предаде нещо, не е предал освен че сте ме плюели. 
            <br>&emsp; Имайте предвид че това е публичен сайт и не мога да говоря директно за неговите или вашите тайни, опитвам се да бъда коректен спрямо всеки. Познавам Мишо от "Найден Геров", където и вие сте учили. Споменавам го защото вие сте били там, докато ние също сме били там... Когато се запознах с него, всеки ме предупреждаваше да страня, да бягам от него, всеки от приятели, роднини и учители.
            <br>&emsp; Бях свидетел на много опасни неща още преди да се сприятелим, дори не помня как се сприятелихме, но това се случи. През годините открих че наистина използва определени нелегални неща, че е готов на физическо насилие и понякога дори се радваше в това. Виждал съм как преследва хора до дома им, пред вратата им и ги "наказва", хора които дори не е срещал през живота си или не е потвърдил дали наистина са сторили нещо, дали това изобщо е човекът, който търси.
            <br>&emsp; През годините той се опитваше многократно да се поправи, но заради действията му ми е споделял и лични неща за семейството си, и той ранно остана съвсем сам - далеч по-рано от мен. Опитахме се да му помагаме, но действията му не се променяха, понякога изчезваше с месеци, понякога с години и когато се върнеше винаги имаше истории и това къде е бил и какво е правил. Нито една не е за споделяне, но ще споделя една , която той е разказвал на други освен мен.
            <br>&emsp; Ще ви дам пример за времето когато той живееше и работеше в Америка. Докато беше там не му беше лек живота и смятам, че беше до голяма степен заради неговото мислене. Докато беше там е имал проблеми с полицаи и е бил заключван понякога.Опитахме се да държим връзка с него но той изчезна отново и когато се появи няколко месеца по-късно се оказа, че спи в колата си, опитва се да се върне в България и не може. По неговите думи някой го преследвал да го убие и той бягаше от град в град. Така и не разбрахме истината , кой и защо? Но той се върна в крайна сметка. Надявах се че след това ще е по-сериозен и въпреки че беше добър приятел, не беше се променил иначе. Единият път в който го поканих у нас да преспи до толкова изкара акъла на мен и родителите ми, че стояхме на смени будни цяла вечер. След поредния бой, той си беше разкъсал вена на ръката, като просто удари някого с такава сила, че той самият имаше нужда от спешна помощ, която му дадохме и стоях в Болницата за него.
            <br>&emsp; След това разбрах, че в Америка всъщност е имал приятелка и е спал на земята на един дюшек преди да се изнесе в колата си, уж отиде да изкара пари, но като се върна пари нямаше. Обясняваше как техните "опиати" са слаби и прочие. През този период често слушах за жените с които е преспал или убедил да направят нещо, което те не искат.   
            <br>&emsp; Но последният път когато се видяхме, той току що беше сторил нещо на едно момиче и с Иван бяхме искренно стреснати, изплашени и погнусени от това как той разказваше с усмивка и смях в детайли, как я е убедил, заплашвал че дори полицията няма да ѝ повярва.  
            <br>&emsp; Това беше границата за мен, толкова пъти се опитвах и стараех да му помогна, макар да не бях аз самият "металяга" се събирах с тези хора заради него.  
            <br>&emsp; Когато се върна за пореден път, вече бях решил твърдо да се боря за вас. Но всичко което сме преживяли и по-конкретно последната случка ми изкараха акъла. Защото докато ни споделяше тези неща, говорехме и конкретно за Теди и Поли, повече за Теди. Може би не бях добър приятел спрямо него, за да ви споделям тези неща, но единственият ми инстинкт беше , че искам да ви предупредя и предпазя. Всичките ни приятели през годините се отдръпнаха от него, включително Никола и Тошко, които познавате - не си внушавам действията му, но стоях най-дълго до него.
            <br>&emsp; Въпреки това не оценявам какво е станало на концерта в Хале. Не е коректно да нападате човек, който не ви е доближил. Аз предупредих ВАС за да се пазите, не да нападате. Това е един човек , който в рамките на 10 минути съм виждал да подпалва нечия глава (да, буквално подпалва с огън) и после да стои, и говори с другиго като най-добър приятел.    
            <br>&emsp; Моля ви разберете, че макар и да ви споделих това защото ме беше страх за вас, не е било за да го използвате срещу мен. Както и вие сте ми споделяли неща, за някои които дори родителите ви не знаят и те винаги са си оставали между нас.
            <br>&emsp; Аз съм ваш по-голям батко или баща ако искате така го приемете. При наличие на опасност, Ви гледам както бих гледал собственото си дете един ден.        
            </div>`

            break;

        case 'Friends':
            text = `<div class="reveal-text">
            &emsp; Казано е на Мишо "Ние бяхме само приятели" . Затова желая да изясня и потвърдя тези думи. Многократно сте ми казвали, че сме само приятели, дори когато ме е боляло от това, не съм го отричал. Във вашите очи бях само приятел. Като ваш приятел, исках да излизаме, да ходим из мола, на разходка, да видим книжарниците , концерти, интересувах се от вашите интереси и винаги ви изслушвах. Вие правихте същото и съм ужасно благодарен за това.
                <br>&emsp; Но това ,че за вас съм бил приятел, винаги съм казвал, че сте повече от това за мен. Никога не съм имал заблуждения че е взаимно, никога не съм имал заблуждения, че имаме връзка или нещо подобно. Напротив, повтарях отново и отново колко държа на вас. Научих се да ви обичам по един платоничен начин знаейки, че е едностранно. От две млади девойки, за мен се превърнахте в нещо което не съм подозирал, че ще съществува в живота ми - щастие, надежда и мечти под формата на приятел.
                <br>&emsp; Затова все повече се стараех и правех неща за вас, които надали бих направил за някой другиго ако не ми е сестра или половинка. Но не търсех повече от приятелство от вас. Това което търсех е време с вас, пътувания, преживявание и спомени. Още съжалявам , че никога нямах възможност да пия алкохол с вас. Не говоря за едно питие, а наистина да пия докато ми се отключи сърцето и устата, докато започна да говоря и изразявам колко се гордеех с вас. Когато осъзнах, че това е единственият начин по който мога с думи да ви покажа как наистина се чувствам, започнах все повече да го преследвам. Едно време Мерито ми казваше, че като пия повече и съм наистина себе си. През останалото време винаги се притеснявах и често млъквах и не говорех около вас, защото не знаех как да изразя желанието да ви прегърна и разплача от благодарност за това че съществувате в живота ми.
                <br>&emsp; Казано е на Мишо, все едно съм заблуден за какво точно бяхме. Има много моменти , някои с Поли, някои с Теди , които още си спомням със сълзи от радост, защото дори и като приятели, бяхме поне близки. Достатъчно близки, за да си споделяме неща и аз да споделям неща, за които имах доверие единствено на вас.
                <br>&emsp; Не е тайна, че такъв момент е една конкретна прегръдка от Поли, когато макар и да не бяхме близки тогава, означаваше много за мен и с времето започна да е още по-значима макар и да стои само в миналото. Защото я опознах и разбрах , че това е било далеч по-голяма крачка за нея отколкото подозирах.   
                <br>&emsp; Казвал съм Ви не един път, това което вие сте една за друга, това което Теди е за Поли и Поли е за Теди, това приятелство, където понякога се разплаквате взаимно, друг път си носите утеха, че самотото присъствие на другия човек е важно за вас, дори не е нужно да говорите. Това бяхте вие за мен , това беше най-близката аналогия (сравнение), което можех да направя.
                <br>&emsp; Много неща правех за вас, само защото ми бяхте като семейство и далеч по-присърце от семейство. Защото семейството е нещо което не избираме, а се раждаме в него и нямаме избор. Но при вас имах избор, преодолях някои лични проблеми и ви преоткрих в сърцето си. Затова и винаги бях насреща за абсолютно всичко, без значение какво е и какво би ми струвало като усилия.  
                <br>&emsp; Моля Ви разберете, нямам илюзии по въпроса. Говоря от моя гледна точка, но начина по който се боря за вас ме остава психически и емоционално изтощен и понякога имам нужда просто да излея всичко това. Ако крещя и викам за някяо прегръдка или някоя усмивка или че ви сънувам, не е защото сме имали връзка, която никога не е съществувала. А защото това е красив, прекрасен спомен едно от малкото неща, които ценях в живота. Колкото и да ме беше страх да обичам отново, вас ви обикнах и открих нов страх - страхът да ви изгубя.   
                <br>&emsp; Затова и се боря за това което бяхме, а ние бяхме приятели дори в най-мрачните дни. Не се боря за интимност, която не съществуваше, не се боря за връзка, която никога не е имало. Боря се за едно приятелство, което от моя страна беше и семейството , което винаги съм търсел. но не знаех че ще открия в приятели.           
                </div> `
            break;

        case 'Manipulator?':
            text = `<div class="reveal-text">
            &emsp; Вие сте първите хора в живота ми, които някога са ме наричали така. Поли надявам се помни , преди месеци четох и говорих с нея за това. Аз бях щастлив и с много малко, винаги давах повече отколкото получавах и това е добре, защото това беше моят избор. Но понякога се чувствах изтощен психически и емоционално ако не получа нужната ми доза "приятелство" или "сближеност", затова молех когато изпитвах такава нужда.... Това не ме прави манипулативен, може би ме прави по-малко мъж или жалко извинение за човек, но се опитвах да бъда искрен.
                <br>&emsp; Това с фестивала беше ..... ужасно, но сами видяхте колко исках да оправя грешката си, че ме гризеше отвътре и търсех как постоянно да го повдигам на въпрос. Съгласен съм, че това може да е изглеждало ужасно... съжалявам нямам кой знае какво извинение, единствено че преминавах през различните етапи на скръб или загуба. Видяхте колко плаках за вас, как повдигах на въпрос всичко и целия живот. Минах през всичките етапи многократно, скръб, отричане, гняв, пазарене, депресия.... Скърбях и още скърбя за вас все едно съм погребал най-близките ми хора, което отчасти е така.
                <br>&emsp; Признавам, че през етапа на гняв сторих ужасни неща. Но отдавна мина този период и единствено се старая да ви подкрепям и да отплатя за грешките си с действия.
                <br>&emsp; Въпреки че ме наричате Манипулатор, стремя се ако не винаги то поне 80-90% от случаите да ви информирам за всяко нещо което ви касае като идванията ми... Дори когато смених колата писах дни предварително на Поли, че искам да почна да си карам новата кола, че ще започна да я карам и прочие..... Концерта щеше да е първото ми социално излизане от Август месец насам , но въпреки това останах настрана и скитах изградът часове наред, изпитвах вина че изобщо опитах да отида.
                <br>&emsp; Дори да не ви се вярва, бях и съм откровен за ужасно много неща, нещата за които преди месеци излъгах за, бяха от гняв или от страх. Все още ме е страх от вас, но виждате че избягвам усложнения, избягвам драми и конфронтации. 
                <br>&emsp; Това с последователите спря преди много време, пращах малко по малко за да привлека вниманието Ви. След като видях, че получавате такива и от другаде, започнах да водя списък с бот акаунтите които ви следват. Наскоро закрих сайтът си, защото получих 1-2 поръчки за вас и не исках да имам нищо общо. Поради легални причини , не мога да кача снимка, но ако желаете ще ви изпратя снимка на лично на базата данни , там ще видите поръчките. Тя е платена за още 7 месеца, след това ще изгубя достъп и до нея.
                <br>&emsp; Не ви изпращам подаръци, за да ви спечеля, и тримата знаем, че пари и подаръци не ви впечатляват. Изпращам ви подаръци за да покажа , че още мисля за вас, още ме грижа за вас. Лесно е да подкрепиш някого, когато имах излишни средства, опитвам се да покажа, че бих ви подкрепил дори когато не разполагам с такива или когато знам че няма да ви видя, чуя, няма да ми благодарите или дори има възможност да ги продадете.
                <br>&emsp; И накрая искам да кажа нещо, не умея често да изразявам ясно и директно мислите си. Понякога исках да ви науча на нещо и вие го приехте като заплаха, не ви заплашвам, винаги съм искал просто да ви науча на разни неща или да ви покажа "по-голямата картина". Искам да е ясно, това че не се храня, че плача, че не живея живот ,се депресирам и подобно. Не е ваша вина, никога не съм ви държал отговорни, все едно вие сте го причинили. Това е изцяло моя вина, мои решения и аз избирам да днес да живея така. Преди когато съм споделял тези неща, не е за да ви накарам да се чувствате гузни или виновни, винаги съм искал просто да споделям с вас, за да разберете чувствата ми. Едно е да съм тъжен и ще ми мине, друго е да съм депресиран , трето е до толкова да тъгувам, че да не мога да се храня нормално. Това са различни степени на една и съща емоция и често ви споделям такива детайли, с надежда да разберете къде се намирам емоционално и психически.
                <br>&emsp; Манипулатор? Не знам защо, разбирам защо други биха го мислили, но на вас съм споделял ужасно много и често преди да ви кажа какво мисля обяснявах надълго и широко как стигам до тези мисли. Вие не бяхте моя "играчка" , която да манипулирам, вие бяхте моето "сигурно" място, където можех да споделя всичко и да отворя сърцето си. 
                <br>&emsp; Съжалявам, ако съм показал такива тенденции или жестове, не е било нарочно и се кълна в семейството ми и котките ми, че никога не съм имал намерения или дори мисъл да ви манипулирам.            
               </div> `
            break;

            case 'Fight':
               text = `<div class="reveal-text">
               &emsp; Боря се за вас от месеци, повече от половин година, макар да преминавам през различни емоции и етапи, някои неща в начина за това как се боря за вас остават същите, други се променят.
                <br>&emsp; - Първо, това което остана едно и също, е че се изолирвам от всички хора, социални събития, приятели и прочие. Всеки ден в който имам възможност, ставам рано сутрин, храня котките и излизам. Понякога не ходя на работа, понякога не говоря с друга жива душа с дни, понякога не се храня с дни. Стоя навън по 12-14 часа и скитам или просто мисля над случилото се, ако имам книга, чета книгата и размишлявам за вас и над миналото. 
                <br>&emsp; Това го правя, не защото вие ме карате, а защото моята борба е да демонстрирам, че съм готов на саможертви, че вие значете за мен повече от други хора в живота ми, че съм готов да ви дам единственото нещо, което нищо не може да върне на този свят - времето и дните от живота ми. Мисля че ако стоях вкъщи на топло, играех си игрите, излизах с приятели и си живеех живота като цяло, тогава каква тежест имат думите ми "боря се за вас" като реално просто съм продължил напред и се връщам да проверявам единствено дали сте ми простили... Смятам , че ако ще се боря за вас, то трябва да съм готов да жертвам всичко за вас. Идеален пример за това е факта, че не празнувах Коледа или Нова Година, знаете че празниците са важни за мен, дадох подарък на Коледа на семейството си, но посрещнах Коледа и Нова Година сам в колата си, навън да чакам и да се надявам на съобщение от вас.
                <br>&emsp; Затова прекарвах цели дни със седмици и месеци наред във Виница първоначално , надявах се фактът че студените месеци, това че седя на центъра на Виница при -10 градуса от 9 сутринта до 10-11 вечерта , просто да чакам и чакам , надявах се това да покаже колко съм сериозен , знаейки че няма да се появите все пак да стоя в студа само за да заслужа един разговор с вас. В някои от вашите истории (гледам теб Теди) имаше сцена как един от героите стоя цяла вечер в дъжда пред палатът/ замъка на другият герой , само за да го види. Виждате от къде ми идват някои идеи... аз също стоях отново и отново , някои дни се молех на господ на чудо, да се появите, за да мога да се прибера на топло.
                <br>&emsp; Това не се е променило, още ви давам от живота си всеки ден, не контактувам с хора, не социализирам с хора, няколко пъти бях ужасно самотен и опитах, но изпитах огромна вина, все едно че съм спрял да се боря за вас и бързо се върнах към това "чакане". Това продължава днес, утре, удругиден. Сменил съм локацията, за да не ви притеснявам във Виница, но това продължава вече стотици дни (and counting).
                <br>&emsp; - Второ друг начин по който се боря за вас е с тези малки и глупави подаръци, с тези акаунти с които ви пиша. Не е лесно да отгатна какво бихте искали докато не контактуваме, не е лесно да крия от родителите ми, къде отиват парите ми. И ми е трудно да продължавам да създавам акаунти, само за да напиша съобщения, които не знам дали се четат, дали достигат до вас изобщо. Понякога прекарвам по 3-4 часа само за да създам акаунт, който автоматично се банва и след това опитвам отново. Накрая единствно за да ви кажа макар и с много думи "Здравей, липсваш ми".
                <br>&emsp; - Трето, понеже в началото направих нещо лошо и казах на Крис да се пази от вас, вярвайте ми не беше за да ви очерня , наистина тогава бях изплашен от вас и се чувствах предаден както никога. Но все пак осъзнавам, че не беше редно и затова от месеци насам, говоря с артисти, хваля вашите умения, артове и доказателство за това ще видите след близо 2 месеца, когато ви изненадаме с нещо с ваши колеги. За този 1 човек на когото казах тези неща, се опитвах да ви издигна в очите на 100 други и разучавам как са започнали кариерите си, събирам препоръки и съвети. Надявам се някой ден да мога да ви предам поне нещо полезно от тях.
                <br>&emsp; - Четвърто, боря се за вас като спрях да ходя на определени места, когато ви видя да ви оставям , да си тръгвам. Макар да изпитвах все още страх от вас, силно желая да дойда и да ви кажа "Здравейте, може ли да говорим за какво се случва с вас и живота ви?" . Знам че вие не искате и гледам да страня , гледам да ви предпазвам и съм го казвал много пъти - понякога ви предпазвам от мен , защото знам че ме виждате като заплаха.
                <br>&emsp; - Пето, Опитах се да удържа на всичките си обещания спрямо вас, всички които бях дал , макар да минаха месеци без да сме говорили , се опитах да ги спазя. Останах 2 обещания , които за съжаление няма как да спазя ако не общуваме, но ако ми се отдаде възможност, ще я сграбча и ще спазя и тях.
                <br>&emsp; - Шесто, отменях много и все още отменям различни събития, отмених поканата ми към Аля да идва вкъщи и куп други неща. Апартамента ми е на 90% готов, защото последния 10% бяха планирани за вас, имам все още голи стени без декорации , празни рафтове и кутии с неща, с които исках да ви изненадам. Бях планирал вие да оставите своят "отпечатък" в дома ми с комисиите, конкретно комисията която направих на Поли, още пазя специално място за нея, макар да минаха вече 2 години. Знам точно къде исках да събирам вашите творби и мърч и не смятам нещо друго да заема мястото им. Малко е депресиращо като го обяснявам, тази празнота и полузавършеност ми напомня , че животът щеше да е по-красив с вас в него. 
                <br>&emsp; - Седмо, този сайт е един малък пример за това . Това е обикновено място, където програмисти демонстрират своите умения, проекти или правят портфолио. Аз го посвещавам на вас, макар да не е особено красиво, все пак е за вас и никой другиго.
                <br>&emsp; - Накрая и накратко, спрях да се храня, имаше период в който вярвах че трябва да се самонараня , за това което ви причиних и не се хранех с дни, едва когато ми ставаше черно пред очите изяждах по нещо малко. Спрях да готвя, спрях да чистя, един период дори спрях да се къпя. Вярвах и вярвам, че каквато и болка да си самопричиня, никога няма да е достатъчно за да отплатя сторенето към вас.
                <br>&emsp; Но това не е ваша вина, не казвам тези неща, за да ви вмъкна вина, това са моите решения и моят начин да се боря за вас. Като сложа живота си на пауза, правя малки жестове за вас, самоличувам и самонаранявам се за това което съм ви сторил. И всекидневно давам часовете от живота си за вас и размисъл.
                <br>&emsp; Съжалявам ако това не е достатъчно, но съм готов на жертви , болка  и труд за вас, опитвам се да го демонстрирам! Моля кажете ми как мога да го докажа по значим за вас начин, нека заслужа този разговор, нека заслужа приятелите ми за един ден. Знам, че най-вероятно това ще е последният ни разговор някога, но дори и така да е, боря се за вас и постоянно търся нови начини да го правя ! В момента имам билети купени за двата КомикКон-а , само в случай че ви одобрят , подготвен съм да тръгна за Румъния и София, за да ви подкрепя. И то ще ви подкрепя единствено като се появя с надеждата да ми продадете мърч от вас. Мърч на Тедито все още го пазя и има специално място, тъжно ми е , че така и нямам нищо от Поли. Защото тениската която купих, после я върнах за да я продадем в София. Реално имам единствно мърч от Теди и много си го ценя, много си го обичам и си го гледм почти всеки ден! Но ми се ще да имах и от Поли. 
               </div> `
                break;

                case 'Questions':
                text = `  
                <h2> Тук може да задавате въпроси, публично... на които обещавам да отговарям само честно.</h2>  
        <form id="dataForm">
        <label for="Question">Въпрос:</label>
        <input type="text" id="question" name="question"><br><br>
        <button type="button" onclick="saveJson()">Изпрати</button>
        `

        if (JSONquestions.length > 0){
            JSONquestions.forEach(q => {
                question = JSON.parse(q)
                text += `<p>Въпрос:  ${question.q}</p>
                <p>Отговор:  ${question.a}</p><hr>`
            })
        }
        text+= '</form>'
                break;

                case 'Video':
                    text = `<iframe src="https://drive.google.com/file/d/1-AtDwabZ5mysRNBKtM8L39V6BdM-219j/preview" width="640" height="480" allow="autoplay"></iframe>`
       break;
                    default:
            text = "Dany forgot this one";
            break;
    }
    // Replace its content
    myDiv.innerHTML = text;
    const h1 = document.getElementById("header");
    h1.innerHTML = id;
    document.getElementsByClassName("arrow-button")[0].style.visibility = 'visible'
}

function colors() {
    var colours = ['brown', 'burlywood', 'darkcyan', 'darkgoldenrod', 'cyan', 'tomato', 'teal', 'steelblue'];
    var divs = document.getElementsByClassName("book");

    var i;
    for (i = 0; i < divs.length; i++) {
        var newColor = Math.floor(Math.random() * colours.length)
        divs[i].style.backgroundColor = colours[newColor];
    }
}

colors()

function loadBookshelf() {
    const h1 = document.getElementById("header");
    h1.innerHTML = `Polina Ilieva & Teodora Ilieva`;
    document.getElementsByClassName("arrow-button")[0].style.visibility = 'hidden'
    const myDiv = document.getElementById("bookshelf");
    myDiv.innerHTML = bookshelf
    colors()
}

function saveJson() {
    // Get form data
    const question = document.getElementById('question');
    const questionValue = question.value

    if(!question){
        return
    }

    // Convert data to JSON format
    const data = {
        q: questionValue,
        a: ""
    };
    const jsonString = JSON.stringify(data);

    JSONquestions.unshift(jsonString);

    question.value=''

    openBook('Questions')
}

