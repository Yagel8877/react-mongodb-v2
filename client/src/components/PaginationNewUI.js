import data from "../numofvids.json";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import usePagination from '@mui/material/usePagination';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from "@mui/icons-material/LastPage";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigatePreviousIcon from '@mui/icons-material/NavigateBefore';
  
  export default function PaginationNewUI() {
    
    const navigate = useNavigate()

    

    const NumOfVids = 12
    let { slug } = useParams();
    let IntSlug = parseInt(slug);
    let length = parseInt(data.len) + 1 //adding 1 for cases when NumOfpages % 12 === 0 but theres actualy 1 more video because in starts from 0 and not 1.
    console.log(length)
    let NumOfPages = Math.ceil(length/NumOfVids)
    console.log(NumOfPages)
    const { items } = usePagination({
      count: NumOfPages,
      page: IntSlug,
      showFirstButton: true,
      showLastButton: true,
      onChange: (e, PageNum) =>{
                    console.log(PageNum)
                    navigate(`/page/${PageNum}`)
                }}
    );
  
    return (
      
        <div className="PaginationDiv">
          {items.map(({ page, type, selected, disabled, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = <p className="md:pt-4 md:w-[50px] md:h-[50px]">...</p>;
            } else if (type === 'page') {
              children = (
                <button
                  type="button"
                  className={selected ? "SelectedPageButton" : "PageButtonNumber"}
                  style={{
                      fontWeight: selected ? 'bold' : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            }else if(type === 'first') {
                    if(disabled){
                        children = (
                            <button type="button" className="disabledButtonPagination" {...item}>
                                <FirstPageIcon />
                            </button>
                );
            }else{
                children = (
                    <button type="button" className="PageButtonNumber" {...item}>
                        <FirstPageIcon />
                    </button>
                );
                }
              }
              
              else if(type === 'last') {
                if(disabled){
                    // console.log(page)
                    children = (
                        <button type="button" className="disabledButtonPagination">
                    <LastPageIcon />
                  </button>
                );
            }else{
                children = (
                    <button type="button" className="PageButtonNumber" {...item}>
                <LastPageIcon />
              </button>
            );
            }
              } 
              else if(type === 'next') {
                if(disabled){

                    children = (
                        <button type="button" className="disabledButtonPagination">
                    <NavigateNextIcon />
                  </button>
                );
            }else{
                children = (
                    <button type="button" className="PageButtonNumber" {...item}>
                <NavigateNextIcon />
              </button>
            );
            }
        }

              else if(type === 'previous') {
                if(disabled){
                    children = (
                  <button type="button" className="disabledButtonPagination">
                    <NavigatePreviousIcon />
                  </button>
                );
              }else{
                children = (
                    <button type="button" className="PageButtonNumber" {...item}>
                      <NavigatePreviousIcon />
                    </button>
                  );
              } 
              }
            else {
              children = (
                <button type="button" className="PageButtonNumber" {...item}>
                  {type}
                </button>
              );
            }
  
            return <li key={index}>{children}</li>;
          })}
        </div>
      
    );
  }