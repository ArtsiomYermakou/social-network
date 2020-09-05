import React, {MouseEvent} from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

let Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? styles.selectedPage : ""}
                         onClick={(e: MouseEvent) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>

}
export default Paginator;