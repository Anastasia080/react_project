
function MapComponent(){
    return (
    <div className="map-container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4122.097917558016!2d30.352310746514704!3d59.76063882159366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962475a58e290b%3A0xf25584fbd3e3f9d6!2z0K3QutGB0L_QvtCk0L7RgNGD0Lwt0JjQvdGC0LXRgNC90Y3RiNC90Ls!5e0!3m2!1sru!2sru!4v1762494018089!5m2!1sru!2sru"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта Экспофорума">
        </iframe>
    </div>
  );
}

export default MapComponent;