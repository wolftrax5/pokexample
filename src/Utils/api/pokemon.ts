import { API_POKE_FORMS} from '../consts';
import { POKETYPE_API, POKE_IDENFY } from '../../Interfaces'

export async function fetchForm(id:POKE_IDENFY): Promise<POKETYPE_API[]>{

    const response = await fetch(`${API_POKE_FORMS}${id}`)
    const result =  await response.json()

    return result;
}