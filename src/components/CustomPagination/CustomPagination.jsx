import { NavLink} from "react-router-dom";
import { useState } from "react";


export const CustomPagination = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const changeCurrentPage = () => {

    }


    return (
        <nav>
            <ul>
                {records.map((n, i) => (
                    <li key={i}>
                    <NavLink onClick={changeCurrentPage}>{n}</NavLink>
                </li>
                )
                    
                )
                }
                
            </ul>
        </nav>
    )

}




