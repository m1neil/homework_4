import GuessNumber from "./GuessNumber/GuessNumber"
import Messenger from "./Messenger/Messenger"

function App() {

	return (
		<>
			<div className="task">
				<div className="task-container">
					<div className="task-description">
						<span>Приклад.</span> Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).
					</div>
				</div>
			</div>
			<Messenger />
			<div className="task">
				<div className="task-container">
					<div className="task-description">
						<span>Задача.</span> Гра “Вгадай число”. Правила гри:
					</div>
					<ol className="task-list">
						<li className="task-list-item">
							комп”ютер генерує трицифрове число;
						</li>
						<li className="task-list-item">
							кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)).
						</li>
						<li className="task-list-item">
							якщо цифру вгадано, вона відображаться у полі гри “Число”;
						</li>
						<li className="task-list-item">
							програє той, хто вгадав останню цифру.
						</li>
					</ol>
				</div>
			</div>
			<GuessNumber />
		</>
	)
}

export default App
