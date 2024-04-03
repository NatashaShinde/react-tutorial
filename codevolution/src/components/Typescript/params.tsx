import { Paper } from '@mui/material'
import ModificationForm from './ModificationForm'
import Loading from '../../../components/ui/Loading'
import ShowError from '../../../components/ui/ShowError'
import { useParams } from 'react-router-dom'
import useGetUserById from '../../../hooks/users/useGetUserById'
import { DefaultValues, UserByIdResponse } from '../../../types/users'

function ModifyUser() {
	// check if it is modify or new by :: id
	// if update
	// ... call the api for User
	// ... set into default values and call the modification form
	// else
	// ... create default values and call the modification form

	const { id } = useParams()
	// users/modify/:id => users/modify/23 => {id: '23'} => '23'
	// users/new => users/new => {} => undefined

	// user/edit/:userId => user/edit/34  => {userId: '34'}
	// post/:postId/comment/:commentId => post/how-to-be-rich/comment/23 => {postId: 'how-to-be-rich', commentId: '23'}

	const { data, isLoading, error, isSuccess, isError } = useGetUserById({ id })

	if (id) {
		// update form
		const defaultValues = convertToDefaultValues(data)

		return (
			<Paper sx={{ p: 2, m: 2 }} elevation={1}>
				{isLoading && <Loading />}
				{isError && <ShowError message={error?.message} />}
				{isSuccess && <ModificationForm defaultValues={defaultValues} />}
			</Paper>
		)
	} else {
		// create form
		const defaultValues = getDefaultValuesForCreate()

		return (
			<Paper sx={{ p: 2, m: 2 }} elevation={1}>
				<ModificationForm defaultValues={defaultValues} />
			</Paper>
		)
	}
}

export default ModifyUser

const convertToDefaultValues = (response: UserByIdResponse | undefined): DefaultValues => {
	if (response === undefined) return {} as DefaultValues

	return {
		id: response.id,
		username: response.username,
		emailId: response.emailId,
		mobileNo: response.mobileNo,
		commPref: {
			viaSMS: response.commPref.viaSMS,
			viaEmail: response.commPref.viaEmail,
			viaWhatsApp: response.commPref.viaWhatsApp,
		},
	}
}

const getDefaultValuesForCreate = (): DefaultValues => {
	return {
		id: undefined,
		username: '',
		emailId: '',
		mobileNo: '',
		commPref: {
			viaSMS: 1,
			viaEmail: 1,
			viaWhatsApp: 1,
		},
	}
}
