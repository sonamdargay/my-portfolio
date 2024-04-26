import { useEffect } from 'react'

/**
 * for changing document titles
 */
function DocumentTitle(title) {

    useEffect(() => {
        document.title = title;
    }, [title]);
}
export default DocumentTitle