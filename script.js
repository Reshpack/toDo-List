const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);


const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");


const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);

// add categories and tasks

let categories = [
    {
        title: "Personal",
        img: "avatar.png"
    },
    {
        title: "Work",
        img: "work.png"
    },
    {
        title: "Shopping",
        img: "shopping.png"
    },
    {
        title: "Coding",
        img: "coding.png"
    },
    {
        title: "Health",
        img: "healthcare.png"
    },
    {
        title: "Fitness",
        img: "fitness.png"
    },
    {
        title: "Education",
        img: "education.png"
    },
    {
        title: "Finance",
        img: "money.png"
    }, 
];


let tasks = [
    {
        id: 1,
        task: "Buy new walking shoes",
        category: "Shopping",
        completed: false,
    },
    {
        id: 2,
        task: "Finish report for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 3,
        task: "Create meal plan for the week",
        category: "Health",
        completed: false,
    },
    {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "Read chapter 3 of Python book",
        category: "Education",
        completed: false,
    },
    {
        id: 6,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "Pay bills",
        category: "Finance",
        completed: false,
    },
    {
        id: 8,
        task: "Schedule dentist appointment",
        category: "Health",
        completed: false,
    },
    {
        id: 9,
        task: "Update resume",
        category: "Work",
        completed: false,
    },
    {
        id: 10,
        task: "Buy groceries",
        category: "Shopping",
        completed: false,
    },
    {
        id: 11,
        task: "Practice yoga",
        category: "Fitness",
        completed: false,
    },
    {
        id: 12,
        task: "Study JavaScript basics",
        category: "Education",
        completed: false,
    },
    {
        id: 13,
        task: "Review budget",
        category: "Finance",
        completed: false,
    },
    {
        id: 14,
        task: "Attend online seminar",
        category: "Education",
        completed: false,
    },
    {
        id: 15,
        task: "Buy new office supplies",
        category: "Work",
        completed: false,
    },
    {
        id: 16,
        task: "Schedule annual physical",
        category: "Health",
        completed: false,
    },
    {
        id: 17,
        task: "Write code documentation",
        category: "Coding",
        completed: false,
    },
    {
        id: 18,
        task: "Work on budget spreadsheet",
        category: "Finance",
        completed: false,
    },
    {
        id: 19,
        task: "Go to the gym",
        category: "Fitness",
        completed: false,
    },
    {
        id: 20,
        task: "Shop for birthday present",
        category: "Shopping",
        completed: false,
    },
    {
        id: 21,
        task: "Prepare healthy lunch",
        category: "Health",
        completed: false,
    },
    {
        id: 22,
        task: "Review project milestones",
        category: "Work",
        completed: false,
    },
    {
        id: 23,
        task: "Study for certification exam",
        category: "Education",
        completed: false,
    },
    {
        id: 24,
        task: "Update website layout",
        category: "Coding",
        completed: false,
    },
    {
        id: 25,
        task: "Track daily expenses",
        category: "Finance",
        completed: false,
    },
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const categoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const calculateTotal = () => {
    const categoryTasks = tasks.filter((tasks) => tasks.category.toLowerCase() === 
        selectedCategory.title.toLowerCase());
        categoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
        totalTasks.innerHTML = tasks.length;
}

const renderCategories = () => {
    categoriesContainer.innerHTML = ""
    categories.forEach((category) => {
        // get all the tasks of current category
        const categoryTasks = tasks.filter((tasks) => tasks.category.toLowerCase() === 
        category.title.toLowerCase());

        //create a div to render category 
        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src =  `img/${category.img}`;
            calculateTotal();
        });
        div.innerHTML = `
        <div class="left">
                            <img src="img/${category.img}" alt="${category.title}">
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTasks.length}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010
                                1.5zM12 12.75a.75.75 0 110-1.5.75.75 0
                                010 1.5zM12 18.75a.75.75 0 110-1.5.75.75
                                0 010 1.52z"
                                />
                                </svg>
                            </div>
                        </div>
        `;

        categoriesContainer.appendChild(div);

    });
};

renderCategories();