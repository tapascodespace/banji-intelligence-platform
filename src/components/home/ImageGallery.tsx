import financeCharts from "@/assets/gallery/finance-charts.jpg";
import mathEquations from "@/assets/gallery/math-equations.jpg";
import networkDiagram from "@/assets/gallery/network-diagram.jpg";
import timeSeries from "@/assets/gallery/time-series.jpg";
import algoTrading from "@/assets/gallery/algo-trading.jpg";
import correlationMatrix from "@/assets/gallery/correlation-matrix.jpg";
import tickerTape from "@/assets/gallery/ticker-tape.jpg";
import probabilityCurves from "@/assets/gallery/probability-curves.jpg";
import globalMarkets from "@/assets/gallery/global-markets.jpg";
import riskLayers from "@/assets/gallery/risk-layers.jpg";
import fibonacciSpiral from "@/assets/gallery/fibonacci-spiral.jpg";
import orderBook from "@/assets/gallery/order-book.jpg";
import monteCarlo from "@/assets/gallery/monte-carlo.jpg";
import equityCurve from "@/assets/gallery/equity-curve.jpg";
import optionsGreeks from "@/assets/gallery/options-greeks.jpg";
import yieldCurve from "@/assets/gallery/yield-curve.jpg";

const images = [
  { src: financeCharts, name: "finance-charts", label: "Candlestick Charts" },
  { src: mathEquations, name: "math-equations", label: "Mathematical Equations" },
  { src: networkDiagram, name: "network-diagram", label: "Network Diagram" },
  { src: timeSeries, name: "time-series", label: "Time Series Data" },
  { src: algoTrading, name: "algo-trading", label: "Algorithmic Trading" },
  { src: correlationMatrix, name: "correlation-matrix", label: "Correlation Matrix" },
  { src: tickerTape, name: "ticker-tape", label: "Ticker Tape" },
  { src: probabilityCurves, name: "probability-curves", label: "Probability Curves" },
  { src: globalMarkets, name: "global-markets", label: "Global Markets" },
  { src: riskLayers, name: "risk-layers", label: "Risk Layers" },
  { src: fibonacciSpiral, name: "fibonacci-spiral", label: "Fibonacci Spiral" },
  { src: orderBook, name: "order-book", label: "Order Book" },
  { src: monteCarlo, name: "monte-carlo", label: "Monte Carlo Simulation" },
  { src: equityCurve, name: "equity-curve", label: "Equity Curve" },
  { src: optionsGreeks, name: "options-greeks", label: "Options Greeks" },
  { src: yieldCurve, name: "yield-curve", label: "Yield Curve" },
];

export const ImageGallery = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">Image Gallery</h2>
          <p className="text-muted-foreground">
            Right-click any image to save, or click to open full size
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <a
              key={image.name}
              href={image.src}
              download={`${image.name}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-foreground">{image.label}</p>
                <p className="text-xs text-muted-foreground">Click to download</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
