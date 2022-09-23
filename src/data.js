import WomenInTech from './assests/womenInTech_project.png';
import Dashboard from './assests/dashboard.png';
import NumberGuessing from './assests/number_guessing_image.png';
import Travel from './assests/Travel_Image.jpg';
import HotelMangment from './assests/hotel_managment.jpg';
import ExamPortal from './assests/exam_portal_image.jpg';

export const projects = [
  {
    id: 1,
    img: WomenInTech,
    tittle: "Women In Technology",
  },
  {
    id: 2,
    img: Dashboard,  
    tittle: "Policies Sancation System",
  },
  {
    id: 3,
    img: NumberGuessing,
    tittle: "Guess The Number In Python",
  },
  {
    id: 4,
    img: Travel,
    tittle: "Travel Managment System",
  },
  {
    id: 5,
    img: HotelMangment,
    tittle: "Hotel Managment System",
  },
  {
    id: 6,
    img: ExamPortal,
    tittle: "Exam Portal",
  },
];

export const skillsDetails = [{
  id : 1,
  tittle: "Languages",
  skills : [
    {
    percentage: "98%",
    skill: "Java",
  },
  {
    percentage: "80%",
    skill: "Python",
  },
  {
    percentage: "60%",
    skill: "Kotlin",
  },
]
},
{
  id : 2,
  tittle: "Web Technologies",
  skills : [
    {
    percentage: "95%",
    skill: "HTML5",
  },
  {
    percentage: "88%",
    skill: "Java Script",
  },
  {
    percentage: "98%",
    skill: "CSS",
  },
]
},
{
  id : 3,
  tittle: "Frameworks",
  skills : [
    {
    percentage: "70%",
    skill: "Microservices",
  },
  {
    percentage: "80%",
    skill: "SpringBoot",
  },
  {
    percentage: "92%",
    skill: "RestAPi",
  },
]
},
{
  id : 4,
  tittle: "Databases",
  skills : [
    {
    percentage: "95%",
    skill: "MySQL",
  },
  {
    percentage: "80%",
    skill: "PLSQL",
  },
  {
    percentage: "50%",
    skill: "OracleDB",
  },
]
},
];

export const blogsDetails = [
  {
  id : 1,
  tittle: "Introduction to Load Balancing",
  body: [
    {
      para1: "You might have heard the term “load balancing” a lot in your software engineering career or your academic classes. This blog discusses the same on a high level and is written primarily for students who are stepping up in the field of software engineering or distributed computing.",
      para2: "Load balancers are one of the most critical components of any distributed system we see today. Load balancing is the process of distributing loads across a cluster of servers or a group of servers to make sure that no individual server is overloaded or underloaded (in some cases). By distributing the load evenly across all servers, load balancers improve the availability, reliability and maintainability of the system. Today, most of the complex systems handle an enormous amount of data every second and thus load balancers have become a necessity.",
    },
    {
      para1: "Apart from distributing load uniformly, modern load balancers also keep track of the status of all the components when distributing the load. For example, if a server is down or stops processing requests, the load balancer will send its requests to another server and thus helps in maintaining the availability of the system. Load balancers perform a continuous health check on all servers to make sure they can receive and process requests in a timely manner. If unhealthy servers are found, the load balancer removes them from the pool of servers until they are restored. Some load balancers even have the capability to create virtualized application servers to meet the demands of the system.",
      para2: "Load-balancing strategies are used to determine the selection of the backend server by the load balancer to forward traffic Load balancer considers two main points before forwarding traffic  Predefined conditions Load balancers ensure that the selected servers are appropriately responding to the requests and then a pre-configured algorithm with predefined conditions based on the use case is used to select one of the healthy servers selected.",
    },
    {
      heading: "How a load balancer is used?",
      para1: "Usually, a load balancer is present between a client and a server and accepts incoming requests from the clients and distribute the requests evenly across multiple servers. The requests can be in the form of network or application traffic. This uniform distribution of load helps to avoid the single point of failure in the system. Think of a situation where most of your data lie in a single server and it stops working, sounds scary, right?",
    },
  ]
},
{
  id : 2,
  tittle: "Introduction to Serverless Computing",
  body: [
    {
      para1:"I was excited to know after talking to my friends and the cool guys with their startup shirts on at the conferences that how the new companies are taking the serverless way. I came to know about the serverless trend around 2 years ago but didn’t expect it to be this popular in such a short time.",
      para2:"Cloud computing has revolutionized the software engineering principles and the way applications are managed, but developers still need to care about how many servers to use, what should be the memory or disk required etc. Well, who doesn’t like to save money and thus addressing these questions are very important for cost optimization. Even if a company is not dealing with a physical data center with servers, thinking about how many EC2 instances or Google Compute Engines to be used can be a regular task for you or your DevOps team.",
      para3: "Imagine, how easy it would become if you do not have to care about all this. You just focus on your logic, your pretty code and the cloud vendor takes care of all the servers and scalability. This is the server less computing. According to cloudflare, server less computing is a method of providing backend services on an as-used basis. A server less provider allows users to write and provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure. The term ‘server less’ is a bit tricky, it does not mean that there are no servers, there are servers, you just don’t have to maintain that. We can trust AWS, GCP, Alibaba or your favorite cloud provider for this."
    },
    {
      heading:"Function as a service",
      para1:"FaaS is the concept you might not have heard but it is the same concept implemented in the cloud services such as AWS Lambda, Azure functions, Google Cloud Functions etc. These services makes things easier for developers and help reduce their worries by achieving their serverless dream. You can focus on the business logic, write modular functions taking care of a small independent part of your logic and upload it to AWS lambda or GCP Cloud functions or any other cloud vendor. You can think of it is like a modular version of micro services.",
      para2:"If you had been in the software industry for more than 10 years, there is high possibility that you might have worked on a monolithic architecture and must know how difficult it can get to scale up or scale down during peak days and how you might have spent hours or even days debugging some bug. Then, comes the era of micro services, where you have modular services, less complexity since you are mostly working on a service and responsible for that, however still you have to care about the connections to other micro services, scalability, load balancing etc. Then, comes the superhero of architecture, — ’SERVERLESS’. You just create modular functions, set an event or trigger when to invoke the function, go to your micro kitchen, get a nice coffee and that’s it. Apart from this, there are events, triggers and a lot of services associated with FaaS. I won’t talk about them in this article.", 
    },
    {
      heading: "Conclusion",
      para1: "There are multiple languages supported by these services : Nodejs, Python, Go etc. Some cloud providers support some languages while others do not. You can use any cloud provider based on your company’s preferences.",
      para2:"I have worked with Lambda, GCP Cloud functions and Alibaba function compute in my development projects at a very beginner level and very new to this vast serverless world. There is a lot to explore for me and I would be glad share my learnings. I hope this article gives you a very basic introduction to the serverless world, There are many interesting reads on medium about the serverless technology and I would encourage everyone to read.",
    },
    {
      para1: "Please enlighten me with your knowledge and let me know if I missed anything here.",
      para2: "Happy Learning !",
    },
  ]
},
{
  id : 3,
  tittle: "AR Augmented Reality vs VR Virtual Reality",
  body: [
    {
      para1: "The phrases “virtual reality” and “augmented reality” are sometimes used interchangeably. AR apps and games, such as Pokémon Go, and VR headsets, such as the Oculus Quest or Valve Index, are still popular. They sound similar, and as technology advances, they begin to blend together. However, they are two distinct ideas with qualities that differentiate one from the other.",
      para2: "Despite their comparable designs, virtual reality and augmented reality achieve two very distinct things in two very different ways. VR takes you away from reality and transports you to another world by superimposing data on top of what you’re already experiencing. They’re both strong technologies that haven’t quite caught on with consumers yet, but they have a lot of potential. They have the potential to dramatically transform how we use computers in the future, but whether one or both will succeed is still unknown.",
    },
    {
      heading: "What is Augmented Reality (AR)?",
      para1: "Augmented Reality (AR) is a technology that combines the digital and real worlds to create a virtual experience. Apps for mobile or desktop that use augmented reality technology to combine digital elements into the real environment. Augment Reality is the full name of the technology.",
      para2: "For instance, AR technology may be used to overlay score overlays on televised sports events and to pop out 3D photographs, texts, and emails. This technology allows you to walk about freely while projecting visuals onto anything you’re looking at. AR applications and games, such as Pokemon Go, use your phone’s camera to detect your surroundings and overlay additional information on top of it on the screen, extending the idea to smartphones.",
    },
    {
      heading: "What is Virtual Reality (VR)?",
      para1: "A computer-generated representation of another universe or reality is known as virtual reality (VR). It’s commonly seen in 3D movies and video games. It aids in the creation of realistic simulations and the “immersion” of the spectator through the use of computers and sensory instruments such as headsets and gloves.",
      para2: "The lenses refract the LCD or OLED screens within to fill your field of view with whatever is being projected. It might be a game, a 360-degree film, or just the virtual area created by the platforms’ user interfaces. Visually, the headgear transports you to wherever it wants you to go — the real environment is replaced with a virtual one.",
    }
  ]
},
{
  id : 4,
  tittle: "Spring Vs Spring Boot",
  body: [
    {
      heading: "Spring",
      para1: "Spring is an open-source lightweight framework that allows Java EE 7 developers to build simple, reliable, and scalable enterprise applications. This framework mainly focuses on providing various ways to help you manage your business objects. It made the development of Web applications much easier than compared to classic Java frameworks and Application Programming Interfaces (APIs), such as Java database connectivity (JDBC), JavaServer Pages(JSP), and Java Servlet. This framework uses various new techniques such as Aspect-Oriented Programming (AOP), Plain Old Java Object (POJO), and dependency injection (DI), to develop enterprise applications",
      para2: "The Spring framework can be considered as a collection of sub-frameworks, also called layers, such as Spring AOP. Spring Object-Relational Mapping (Spring ORM). Spring Web Flow, and Spring Web MVC. You can use any of these modules separately while constructing a Web application. The modules may also be grouped together to provide better functionalities in a Web application.",
    },
    {
      heading: "Spring Boot",
      para2: "Spring Boot is built on top of the conventional spring framework. So, it provides all the features of spring and is yet easier to use than spring. Spring Boot is a microservice-based framework and making a production-ready application in very less time. In Spring Boot everything is auto-configured. We just need to use proper configuration for utilizing a particular functionality. Spring Boot is very useful if we want to develop REST API.",
      
    },
  ]
},
{
  id : 5,
  tittle: "What is Java?",
  body: [
    {
      para1: "Java is a platform independent language. It is important to know, a platform is the hardware and software. Actually what you will do in Java? Basically we will type a source code file, compile it using the Javac compiler,then run the compiled bytecode on a Java virtual machine.",
    },
    {
      heading:"Code structure in Java",
      para1: "Code structure in Java: A source code file holds one class definition. The class represents a piece of your program, although a very tiny application might need just a single class. The class must go within a pair of cirly braces.A class has one or more methods. In the Dog class, the bark method will hold instruction for how the dog Should bark. Your methods must be declared inside a class.",
    },
    {
      heading:"Anatomy of a class",
      para1: "When the JVM start running, it looks for the class you give it at the command line. We can overload the main method ",
    },
    {
      heading:"A Class with main",
      para1: "Basically you type your source code in file with .java extension.Then compile into a new file with .class extension. Actually running a program means telling the JVM to “ load the class and then start executing its main method. Keep running ‘till all the code in main is finished",
    
    },
  ]
},
{
  id : 6,
  tittle: "What is React Used For?",
  body: [
    {
      para1: "React is a JavaScript library used to create user interfaces. It is also known as a framework at times. The library focuses on designing declarative user interfaces with a component-based approach. Although React is frequently associated with front-end JavaScript development, it can also be used to display views server-side in Node.js or to power mobile apps using React Native. While React is open source, Facebook is the primary developer.",
      para2: "React was developed by Facebook, but it is now extensively utilized by a wide range of businesses. It is frequently compared to frameworks such as Angular or Vue.js, but takes a lighter approach. Instead of having an opinion on the design and structure of your apps, it defers to the individual and, as a result, the community. This results in a wide range of solutions to various issues. As a result, you may come across several attempts/libraries in articles and books.",
    },
    {
      para1: "Developers use React in conjunction with ReactDOM to create for the web. React and ReactDOM are frequently discussed and used to tackle the same challenges as other genuine web development frameworks. We're using that vernacular sense when we refer to react as a \"framework.\"",
      para2:"The major purpose of React is to reduce the number of errors that arise when developers create UIs. It accomplishes this by utilizing components, which are self-contained, logical bits of code that explain a segment of the user interface. These components may be combined to form a complete user interface, and React abstracts away much of the rendering effort, allowing you to focus on the UI design.",
    },
    {
      heading:"Why React?",
      para1: "Despite the fact that there were other JavaScript frameworks accessible on the market, React entered the scene. Let's delve a little further to see why ReactJS was required.",
      para2:"Data is received from a variety of sources, including initial data, real-time data, and user input data, and is then delivered to the dispatcher. The dispatcher then sends this data to the store, where it eventually reaches the view. The view is now the section of the application where you or a user interacts with it. As a result, whatever you see as a web page in your browser is the view itself.",
    },
    {
      para1: "But, what do you believe happens at the back end of frameworks that use this typical data flow?",
      para2: "When new data is added or existing data is modified on the back end, the browser reloads the page and the process is repeated. Only then will we be able to see the new data on the display. However, this typical data flow has one important drawback: it employs the DOM (Document Object Model). The document object model (DOM) is an object that is produced by the browser each time a web page is loaded and may dynamically add or delete data at the back end. However, each time an update is made, a new DOM for the same page is produced. This constant construction of DOM wastes memory and reduces the speed of the programme.",
    },
    {
      heading:"React.JS",
      para1: "React.js, often known as React or ReactJS, is a JavaScript framework that is in charge of creating a hierarchy of UI components, or in other words, of rendering UI components. It supports both the frontend and the server-side",
      para2: "ReactJS is an open-source JavaScript library used to design the user interface for Web Applications. It is responsible just for the view layer of the application. It offers developers to assemble sophisticated UIs from a simple and isolated piece of code called \"components.\" ReactJS composed of two parts first is components, that are the bits that include HTML code and what you want to see in the user interface, and the second one is HTML document where all your components will be presented.",
    },
    {
      part1:"Jordan Walke, who was a software developer at Facebook, developed it. Initially, it was developed and maintained by Facebook and was later utilized in its products like WhatsApp & Instagram. Facebook created ReactJS in 2011 for the newsfeed area, but it was released to the public in May 2013.",
    },
    {
      heading:"React Native",
      para1:"React Native is a free and open-source JavaScript framework for creating mobile apps for iOS, Android, and Windows. It creates a cross-platform mobile app using only JavaScript. React Native is similar to ReactJS, except instead of utilizing web components as building blocks, it employs native components. It is aimed towards mobile systems rather than browsers.",
      para2: "In 2013, Facebook created React Native for their internal project Hackathon. Facebook stated in March 2015 that React Native is now open and available on GitHub.",
    },
    {
      heading:"Conclusion",
      para1:"React is a JavaScript-based framework for developing apps. React Native is a whole platform that allows you to create native, cross-platform mobile apps, and React.js is a JavaScript framework that you can use to build a high-performance UI layer. React.js is the heart of React Native, and it encapsulates all of React's ideas and grammar, making it simple to understand.",
      para2: "Their technological variations are due to the platform. React's browser code, for example, is rendered using Virtual DOM, but React Native renders components on mobile using Native APIs. React employs HTML, and with React Native, you must become acquainted with the React Native syntax. CSS is also not used by React Native. This implies you'll have to utilize React Native's animated API to animate various components of your application.",
    },
    {
      para1: "In summary, React is perfect for creating dynamic, high-performance, responsive UI for your online interfaces, but React Native is designed to offer your mobile apps a fully native experience.",
    }
  ]
}
];