/*
Here we use the developer tap in the chrome to learn the basics of js............we serach https://supersimple.dev/js-basics
to create a pop with a text inside is alert("Hello");
to eradicate the entire webpage  content and replace the string that will be given we use document.body.innerHTML="hello"; so this return only the hello in the wepage ......l.e we modiffy the wep page


for math lesson we use the http://supersimple.dev/projects/amazon/ to learn math and number...we open the console to lesrn it
ler calculate the  order summary in our final project
10let calculate the cost of the products beofre shipping and taxes
Order of operation uses the BODMAS rules

Weild behavior of number in js
this is experience in float(4.4) this is because computer store content in 0s and 1s....e,g 20.95+7.99 this bring inaccuracies due to how computer stire number, how do we avoid this problen...so  is better we calculte in cents that is .95 means 95 cents instaed of dollars so instaed of 20.95 we say 2095+799 cent so we calculate in cent then after we cover it to dollar by (2095+799)/100 so it covert back to dollar

How to round a number to nearset interger in js we use Math.round(input the number u want to round...i.e float)
Math.round(2.5)
e.g ((2095+799) * 0.1) /100 so let round it to perfect dollar according to the wep page....what we would do is that we round the number in cents then after we convert the rounded figure to dollar(/100)....(2095+799) * 0.1)....so it will be Math.round((2095+799) * 0.1)) then the answer wll now be divided by 100....better still Math.round((2095+799) * 0.1) /100


how to use google to learn new js feature
e,g we want to roubd a number we search for javascript how to round a number

how to round 2.8 to 8 using chatgpt or google in js is by using "Math.floor()"
how to round 2.2 to 3 in js using ai or google is using "Math.ceil()"

strings#u can add strings together using +
"some" + "text" output is sometext this is commomly called conacetenation
we can check the type of value using typeof "hello" this is tell us the type of value it is here it string
when add a string and a number eg "HELLO" +3 JS COVERT IT it inTO A STRING it is called type coercion or automatic type conversion
USING THE CONcatenation to get some text in the wepage ["Items("+(1+1)+"):    "+ "$"+(2095+799)/100] to give Items(2):     $28.94
so we can display it in pop using alert("Items("+(1+1)+"):    "+ "$"+(2095+799)/100);

IN js there re three ways to create string first is to use ``(single quote) another is uisng "" double quote...pls use single quote  by recommendstion use double quote when necessary like i`m saved so use double quote here so it willl be "i'm saved" another solution is using an escape character  instead of double quote (\') so it will be `i\`m saved` so it will still give i`m saved...................\ is backslash
another one is \" which is also like the \`
another one is \n is new line character  alert(`Jesus \n Is \n Lord`);

another way of creating astring is using backticks ` we called it template strings cuz they have special features...e,g of the features is interpolation.INterpolation help us to insert values inside a string e,g we want to create this "Items("+(1+1)+"):    "+ "$"+(2095+799)/100
SO WE USE INTERPOLATION WITH THE $ SIGN so it will be like dis `Items(${1+1}): $${(2095+799)/100}`....note we use {} curly bracket

Template string has another feature called multi-line strings....e,g `some then u insert enter key and contiune with text to give some\ntext

some execises solution:
alert(`Total cost $${(599+295)/100}
Thank you come again!`)

`Items${2+2}:    $${(2095*2+799*2)/100}`
'Items4:    $57.88'
`Items(${2+2}):    $${(2095*2+799*2)/100}`
'Items(4):    $57.88'
`Shipping & handling:  ${(499+499)/100}`
'Shipping & handling:  9.98'
`Shipping & handling:  $${(499+499)/100}`  
'Shipping & handling:  $9.98'
`Total before tax: $${(5788+998)/100}`
`Estimated tax(10%): $${Math.round((2095*2+799*2+499+499)*0.1)/100}`
'Total before tax: $67.86'



 */