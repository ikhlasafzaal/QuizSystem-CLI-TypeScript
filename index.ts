#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bgBlueBright(chalk.bold.yellow("\n \t \t Quiz System \n")));

let choicesCondition = true;

do{
    let stdInfo = await inquirer.prompt([
        {
            name: "stdId",
            type: "input",
            message: "Enter your Student Id (must be 5 digits):",
            validate: function (value) {
                const validId = /^\d{5}$/;
                if (!validId.test(value)) {
                    return chalk.red("Please enter a valid 5-digit Student Id.");
                }
                return true;
            }
        },
        {
            name: "stdBatch",
            type: "input",
            message: "Enter your Batch (single alphabet only):",
            validate: function (value) {
                const validBatch = /^[a-zA-Z]$/;
                if (!validBatch.test(value)) {
                    return chalk.red("Please enter a single alphabet for Batch.");
                }
                return true;
            }
        },
        {
            name: "stdName",
            type: "input",
            message: "Enter your name:",
            validate: function (value) {
                if (!value) {
                    return chalk.red("Name cannot be empty.");
                }
                return true;
            }
        },
        {
            name: "stdCourse",
            type: "list",
            message: "Enter your course that you're enrolled in:",
            choices: ['PHP', 'Laravel', 'Asp.Net', 'Exit']
        }
    ]);
    
    
    
    if (stdInfo.stdCourse === 'PHP') {
        console.log(chalk.bgYellow.black("\n \t \t PHP QUIZ: "));
        console.log(chalk.yellow("\t Total Marks = 20"));
        console.log(chalk.yellow("\t Each Question Belongs to 2 Marks."));
    
        const phpQuestions = [
            {
                name: 'q1',
                message: 'What does PHP stand for?',
                choices: ['Personal Hypertext Processor', 'Preprocessed Hypertext Pages', 'PHP: Hypertext Preprocessor', 'Public Hyperlink Protocol'],
                answer: 'PHP: Hypertext Preprocessor'
            },
            {
                name: 'q2',
                message: 'Which symbol is used to denote the start of a PHP code block?',
                choices: ['<?php', '<script>', '{%', '%'],
                answer: '<?php'
            },
            {
                name: 'q3',
                message: 'Which PHP function is used to output data to the browser?',
                choices: ['print()', 'echo()', 'output()', 'write()'],
                answer: 'echo()'
            },
            {
                name: 'q4',
                message: 'Which of the following is NOT a valid PHP data type?',
                choices: ['Integer', 'Float', 'Double', 'Character'],
                answer: 'Character'
            },
            {
                name: 'q5',
                message: 'Which PHP super global array is used to retrieve form data sent with the GET method?',
                choices: ['$_GET', '$_POST', '$_REQUEST', '$_SERVER'],
                answer: '$_GET'
            },
            {
                name: 'q6',
                message: 'Which PHP function is used to establish a database connection?',
                choices: ['connect()', 'open()', 'mysqli_connect()', 'db_connect()'],
                answer: 'mysqli_connect()'
            },
            {
                name: 'q7',
                message: 'What is the correct way to end a PHP statement?',
                choices: [';', ':', ',', '.'],
                answer: ';'
            },
            {
                name: 'q8',
                message: 'Which of the following is NOT a valid way to comment in PHP?',
                choices: ['<!-- Comment -->', '// Comment', '# Comment', '/* Comment */'],
                answer: '<!-- Comment -->'
            },
            {
                name: 'q9',
                message: 'What is the file extension for a PHP file?',
                choices: ['.html', '.php', '.py', '.js'],
                answer: '.php'
            },
            {
                name: 'q10',
                message: 'Which PHP function is used to redirect the user to a different page?',
                choices: ['redirect()', 'location()', 'header()', 'navigate()'],
                answer: 'header()'
            }
        ];
    
        const stdAnswers: any = {};
        for (const question of phpQuestions) {
            const userAnswer = await inquirer.prompt({
                type: 'list',
                name: question.name,
                message: question.message,
                choices: question.choices
            });
            stdAnswers[question.name] = userAnswer[question.name];
        }
    
        let score = 0;
        const correctAnswers: string[] = [];
    
        for (const question of phpQuestions) {
            const userAnswer = stdAnswers[question.name];
            if (userAnswer === question.answer) {
                score += 2;
            } else {
                correctAnswers.push(`${question.message} Correct answer: ${question.answer}`);
            }
        }
    
        console.log(chalk.yellow("\nQuiz completed! Here's your result:"));
        console.log(chalk.green("Your Student Id is: " + stdInfo.stdId));
        console.log(chalk.green("Your Batch is: " + stdInfo.stdBatch));
        console.log(chalk.green("Your name is: " + stdInfo.stdName));
        console.log(chalk.bold(`Score: ${score}/20`));
    
        if (score >= 14) {
            console.log(chalk.green("Congratulations! You passed."));
        } else {
            console.log(chalk.red("Sorry! You failed."));
        }
    
        console.log(chalk.yellow("\nQuestion-wise Status:"));
        phpQuestions.forEach((question, index) => {
            const userAnswer = stdAnswers[question.name];
            const status = userAnswer === question.answer ? chalk.green("Correct") : chalk.red("Incorrect");
            console.log(chalk.bold(`${index + 1}. ${question.message} - ${status}`));
            if (status === chalk.red("Incorrect")) {
                console.log(chalk.green(`   Correct answer: ${question.answer}`));
            }
        });
    }
    
    else if (stdInfo.stdCourse === 'Laravel') {
        console.log(chalk.bgYellow.black("\n \t \t LARAVEL QUIZ: "));
        console.log(chalk.yellow("\t Total Marks = 20"));
        console.log(chalk.yellow("\t Each Question Belongs to 2 Marks."));
    
        const laravelQuestions = [
            {
                message: "What is Laravel?",
                name: "q1",
                choices: ["JavaScript framework", "PHP framework", "Python framework", "Ruby framework"],
                answer: "PHP framework"
            },
            {
                message: "What does Composer do in Laravel?",
                name: "q2",
                choices: ["Generates HTML code", "Manages project dependencies", "Handles database migrations", "Executes unit tests"],
                answer: "Manages project dependencies"
            },
            {
                message: "What is the purpose of Eloquent in Laravel?",
                name: "q3",
                choices: ["Frontend templating engine", "Database ORM", "Middleware for HTTP requests", "Authentication system"],
                answer: "Database ORM"
            },
            {
                message: "What is a migration in Laravel?",
                name: "q4",
                choices: ["Moving code from one server to another", "Upgrading PHP versions", "Managing database schema changes", "Optimizing code performance"],
                answer: "Managing database schema changes"
            },
            {
                message: "What is the name of Laravel's templating engine?",
                name: "q5",
                choices: ["Smarty", "Twig", "Blade", "Handlebars"],
                answer: "Blade"
            },
            {
                message: "What is the purpose of Laravel's artisan command-line interface?",
                name: "q6",
                choices: ["Generating project documentation", "Running automated tests", "Executing common tasks", "Managing server configurations"],
                answer: "Executing common tasks"
            },
            {
                message: "How are routes defined in Laravel?",
                name: "q7",
                choices: ["Using XML files", "In configuration files", "In the web browser", "Using PHP code"],
                answer: "Using PHP code"
            },
            {
                message: "What is the role of middleware in Laravel?",
                name: "q8",
                choices: ["Handling database connections", "Managing user sessions", "Filtering HTTP requests", "Optimizing database queries"],
                answer: "Filtering HTTP requests"
            },
            {
                message: "What is the default database used in Laravel?",
                name: "q9",
                choices: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
                answer: "MySQL"
            },
            {
                message: "What are Laravel service providers responsible for?",
                name: "q10",
                choices: ["User authentication", "Handling HTTP requests", "Dependency injection", "Generating HTML templates"],
                answer: "Dependency injection"
            }
        ];
    
        const stdAnswers:any = {};
        for (const question of laravelQuestions) {
            const userAnswer = await inquirer.prompt({
                type: 'list',
                name: question.name,
                message: question.message, // Corrected from question.question
                choices: question.choices,
            });
            stdAnswers[question.name] = userAnswer[question.name];
        }
    
        let score = 0;
        const correctAnswers = [];
    
        for (const question of laravelQuestions) {
            const userAnswer = stdAnswers[question.name];
            if (userAnswer === question.answer) {
                score += 2;
            } else {
                correctAnswers.push(`${question.message} Correct answer: ${question.answer}`); // Corrected from question.question
            }
        }
    
        console.log(chalk.yellow("\nQuiz completed! Here's your result:"));
        console.log(chalk.green("Your Student Id is: " + stdInfo.stdId));
        console.log(chalk.green("Your Batch is: " + stdInfo.stdBatch));
        console.log(chalk.green("Your name is: " + stdInfo.stdName));
        console.log(chalk.bold(`Score: ${score}/20`));
    
        if (score >= 14) {
            console.log(chalk.green("Congratulations! You passed."));
        } else {
            console.log(chalk.red("Sorry! You failed."));
        }
    
        console.log(chalk.yellow("\nQuestion-wise Status:"));
        laravelQuestions.forEach((question, index) => {
            const userAnswer = stdAnswers[question.name];
            const status = userAnswer === question.answer ? chalk.green("Correct") : chalk.red("Incorrect");
            console.log(chalk.bold(`${index + 1}. ${question.message} - ${status}`)); // Corrected from question.question
            if (status === chalk.red("Incorrect")) {
                console.log(chalk.green(`   Correct answer: ${question.answer}`));
            }
        });
    }
    
    
    else if (stdInfo.stdCourse === 'Asp.Net') {
        const aspNetQuestions = [
            {
                name: "q1",
                message: "What is ASP.NET?",
                choices: ["Java framework", "JavaScript library", "PHP framework", "Web framework for building web apps"],
                answer: "Web framework for building web apps"
            },
            {
                name: "q2",
                message: "What is the primary programming language used in ASP.NET?",
                choices: ["Java", "C#", "Python", "JavaScript"],
                answer: "C#"
            },
            {
                name: "q3",
                message: "What does MVC stand for in the context of ASP.NET?",
                choices: ["Model View Controller", "Most Valuable Component", "Multiple Virtual Classes", "Main View Control"],
                answer: "Model View Controller"
            },
            {
                name: "q4",
                message: "Which file extension is commonly used for ASP.NET web pages?",
                choices: [".html", ".php", ".aspx", ".jsp"],
                answer: ".aspx"
            },
            {
                name: "q5",
                message: "What is the purpose of the Global.asax file in ASP.NET?",
                choices: ["Database configuration", "Session management", "Global application events handling", "Frontend templating"],
                answer: "Global application events handling"
            },
            {
                name: "q6",
                message: "Which of the following is NOT a feature of ASP.NET Core?",
                choices: ["Cross-platform support", "Built-in dependency injection", "High performance", "Tight integration with IIS"],
                answer: "Tight integration with IIS"
            },
            {
                name: "q7",
                message: "What is the role of Razor in ASP.NET?",
                choices: ["Server-side scripting language", "Client-side JavaScript framework", "Frontend CSS framework", "Database management tool"],
                answer: "Server-side scripting language"
            },
            {
                name: "q8",
                message: "What is the purpose of the web.config file in ASP.NET?",
                choices: ["Defining application routes", "Storing user session data", "Configuring application settings", "Managing database connections"],
                answer: "Configuring application settings"
            },
            {
                name: "q9",
                message: "Which of the following is NOT a valid ASP.NET authentication mechanism?",
                choices: ["Windows Authentication", "Forms Authentication", "OAuth", "Basic Authentication"],
                answer: "OAuth"
            },
            {
                name: "q10",
                message: "What is the primary database management system used with ASP.NET applications?",
                choices: ["MySQL", "PostgreSQL", "SQLite", "SQL Server"],
                answer: "SQL Server"
            }
        ];
        
    
        console.log(chalk.bgYellow.black("\n \t \t ASP.NET QUIZ: "));
        console.log(chalk.yellow("\t Total Marks = 20"));
        console.log(chalk.yellow("\t Each Question Belongs to 2 Marks."));
        
        const stdAnswers: any = {};
        for (const question of aspNetQuestions) {
            const userAnswer = await inquirer.prompt({
                type: 'list',
                name: question.name,
                message: question.message,
                choices: question.choices,
            });
            stdAnswers[question.name] = userAnswer[question.name];
        }
    
        let score = 0;
        const correctAnswers: string[] = [];
    
        for (const question of aspNetQuestions) {
            const userAnswer = stdAnswers[question.name];
            if (userAnswer === question.answer) {
                score += 2;
            } else {
                correctAnswers.push(`${question.message} Correct answer: ${question.answer}`);
            }
        }
    
        console.log(chalk.yellow("\nQuiz completed! Here's your result:"));
        console.log(chalk.green("Your Student Id is: " + stdInfo.stdId));
        console.log(chalk.green("Your Batch is: " + stdInfo.stdBatch));
        console.log(chalk.green("Your name is: " + stdInfo.stdName));
        console.log(chalk.bold(`Score: ${score}/20`));
    
        if (score >= 14) {
            console.log(chalk.green("Congratulations! You passed."));
        } else {
            console.log(chalk.red("Sorry! You failed."));
        }
    
        console.log(chalk.yellow("\nQuestion-wise Status:"));
        aspNetQuestions.forEach((question, index) => {
            const userAnswer = stdAnswers[question.name];
            const status = userAnswer === question.answer ? chalk.green("Correct") : chalk.red("Incorrect");
            console.log(chalk.bold(`${index + 1}. ${question.message} - ${status}`));
            if (status === chalk.red("Incorrect")) {
                console.log(chalk.green(`   Correct answer: ${question.answer}`));
            }
        });
    }
    
    else if(stdInfo.stdCourse === 'Exit'){
        choicesCondition = false;
        console.log(chalk.red.bold('Exited from Program...'));
    }
   

    const anotherQuiz = await inquirer.prompt({
        type: 'confirm',
        name: 'anotherQuiz',
        message: 'Do you want to conduct another quiz?',
        default: false,
    });

    choicesCondition = anotherQuiz.anotherQuiz;
} while (choicesCondition);

console.log(chalk.yellow("\nThank you for using the Quiz System."));










