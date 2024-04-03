import logo from './logo.svg'
import './App.css'
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import { FunctionClick } from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Eventbind from './components/Eventbind'
import Parent from './components/Parent'
import Usergreeting from './components/Usergreeting'
import PersonList from './components/PersonList'
import { Stylesheets } from './components/Stylesheets'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import ChangeBg from './components/ChangeBg'
import Task2 from './components/Task2'
import LifecycleA from './components/LifecycleA'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Counter from './components/Hooks/Counter'
import UseState_prevState from './components/Hooks/UseState_prevState'
import UseState_array from './components/Hooks/UseState_array'
import UseState_object from './components/Hooks/UseState_object'
import UseEffect_after_render from './components/Hooks/UseEffect_after_render'
import UseEffect_conditionally_run from './components/Hooks/UseEffect_conditionally_run'
import UseEffect_run_once from './components/Hooks/UseEffect_run_once'
import UseEffect_cleanUp from './components/Hooks/UseEffect_cleanUp'
import UseEffect_incorrect_dependency from './components/Hooks/UseEffect_incorrect_dependency'
import UseEffect_DataFetching from './components/Hooks/UseEffect_DataFetching'
import UseEffect_DataFetch_byID from './components/Hooks/UseEffect_DataFetch_byID'
import UseEffect_DataFetch_BtnClick from './components/Hooks/UseEffect_DataFetch_BtnClick'
import Test from './components/Hooks/Test'
import Create from './components/Crud/Create'
import List from './List'

function App() {
	return (
		<div className='App'>
			{/* <h1 className='error'>Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <Message /> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
			{/* <Eventbind /> */}
			{/* <Parent /> */}
			{/* <ChangeBg /> */}
			{/* <Task2 /> */}
			{/* <LifecycleA /> */}
			{/* <PostList /> */}
			{/* <PostForm /> */}
			{/* <Counter /> */}
			{/* <UseState_prevState /> */}
			{/* <UseState_array /> */}
			{/* <UseEffect_after_render /> */}
			{/* <UseEffect_conditionally_run /> */}
			{/* <UseEffect_run_once /> */}
			{/* <UseEffect_cleanUp /> */}
			{/* <UseEffect_incorrect_dependency /> */}
			{/* <UseEffect_DataFetching /> */}
			{/* <UseEffect_DataFetch_byID /> */}
			{/* <UseEffect_DataFetch_BtnClick /> */}
			<Test />
			{/* <Create /> */}
			{/* <List /> */}
			{/* <UseState_object /> */}
			{/* <Usergreeting /> */}
			{/* <PersonList /> */}
			{/* <Stylesheets primary={true} /> */}
			{/* <Inline /> */}
			{/* <Form /> */}
			{/* <Welcome name='Bruce' heroName='Batman' /> */}
			{/* <Greet name='Bruce' heroName='Batman' />
			<Greet name='Clark' heroName='Superman' />
			<Greet name='Diana' heroName='Wonder women' /> */}

			{/* <Greet name='Bruce' heroName='Batman'>
				<p>this is children props</p>
			</Greet>
			<Greet name='Clark' heroName='Superman'>
				<button>Action</button>
			</Greet>
			<Greet name='Diana' heroName='Wonder women' />

			<Welcome name='Bruce' heroName='Batman' />
			<Welcome name='Clark' heroName='Superman' />
			<Welcome name='Diana' heroName='Wonder women' /> */}
		</div>
	)
}

export default App
