import Layout from '../components/layout';

export default function Comment() {
    return (
        <form>
            <textarea rows="5" id="comment"></textarea>
            <div>
                <input type="file" id="customFile" />
                <label for="customFile">Choose file</label>
            </div>
            <button></button>
            <button>submit</button>
        </form>
    );
}
