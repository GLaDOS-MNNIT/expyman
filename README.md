# Expyman

Expyman is a powerful, user-friendly expense tracker. Designed to help users manage their finances efficiently, Expyman lets you record daily transactions, set budgets, track recurring bills, save for goals, and visualize expenses—all in one sleek and modern interface.

## Table of Contents

  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Backend (Django)](#backend-django)
    - [Frontend (React)](#frontend-react)
  - [Technologies Used](#technologies-used)
  - [Contributors](#contributors)
  - [License](#license)

## Features

- **User Authentication**: Register and login securely to access your personal finance dashboard.
- **Dashboard Overview**: Get a snapshot of total monthly expenses, remaining budget, savings progress, and alerts for upcoming bills.
- **Transaction Management**: Record daily expenses by category (e.g., food, shopping) with details like date and notes.
- **Budget Planning**: Set budgets per category and track spending against limits with visual progress bars.
- **Expense Reports**: Generate visual reports (pie charts, line graphs) to analyze spending patterns over time.
- **Recurring Bills & Notifications**: Set recurring bills and receive notifications before due dates.
- **Savings Tracker**: Create savings goals and track progress.
- **Downloadable Reports**: Export your financial data as a PDF or CSV.

## Installation

### Prerequisites

- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Backend (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/GLaDOS-MNNIT/expyman.git
   cd expyman
2. Create and activate a virtual environment:
   ```bash
   pip install venv
   cd backend
   python -m venv myvenv
   .\myvenv\Scripts\activate
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
4. Create .env file in the backend folder:
    ```bash
    touch .env
5. Copy code from Sample_env.txt and paste in .env

6. Run migrations:
   ```bash
   python manage.py migrate
7. Start the Django development server:
   ```bash
   python manage.py runserver

**Make sure that the MySQL server is running and settings.py is configured accordingly.**

### Frontend (React)
1. Navigate to the frontend directory:
    ```bash
    cd frontend
2. Install dependencies:
    ```bash
    npm install
3. Start the React development server:
    ```bash
    npm start

## Technologies Used

- **Backend**: Django
- **Frontend**: React
- **Database**: MySQL
- **Styling**: Tailwind, Headless UI
- **Charts**: Chart.js

## Contributors

- [Sanyam Goel](https://github.com/hexwhiz/)
- [Sahil Patel](https://github.com/Sahilpatel2507/)
- [Saloni Rai](https://github.com/Rai-Saloni/)
- [Akash Kumar Chand](https://github.com/Akash6299625764/)

## License

This project is licensed under the MIT License.