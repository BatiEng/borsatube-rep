import { useEffect } from "react";

const TradingviewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "BIST:XU100" },
        { description: "", proName: "BIST:THYAO" },
        { description: "", proName: "BIST:ISCTR" },
        { description: "", proName: "BIST:KCHOL" },
        { description: "", proName: "BIST:EREGL" },
        { description: "", proName: "BIST:BIMAS" },
        { description: "", proName: "BIST:FROTO" },
        { description: "", proName: "BIST:TUPRS" },
        { description: "", proName: "BIST:ENKAI" },
        { description: "", proName: "BIST:SAHOL" },
        { description: "", proName: "BIST:SISE" },
        { description: "", proName: "BIST:AKBNK" },
        { description: "", proName: "BIST:YKBNK" },
        { description: "", proName: "BIST:ASELS" },
        { description: "", proName: "BIST:ARCLK" },
        { description: "", proName: "BIST:PETKM" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "regular",
      locale: "en",
    });
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default TradingviewWidget;
