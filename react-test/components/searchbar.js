export default function SearchBar() {
	return (
		<div className="d-flex justify-content-center pt-5 pb-2 ">
            <div className="form-group has-search col-9 col-sm-7 mb-3">
				<span className="fa fa-search form-control-feedback"></span>
				<input type="text" className="form-control text-left rounded-top border"
					placeholder="Search by Character"></input>
			</div>
		</div>
	)
}
