export default function CallService() {
  return (
    <div>
      <div
        id="callService-container"
        className="callService d-sm-flex flex-column flex-sm-row"
      >
        <div className="d-none d-md-block">
          Need help? Call us: (+98) 0234 456 789
        </div>
        <div className="truck">
          <div>
            <i className="bi bi-geo-alt"></i> <span className="space"> </span>
            Our store
          </div>
          <div>
            <i className="bi bi-truck"></i>
            <span className="space"> </span>Track your order
          </div>
        </div>
      </div>
    </div>
  );
}
