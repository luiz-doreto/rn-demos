import WidgetKit
import SwiftUI

struct Provider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
      SimpleEntry(date: Date(), data: WidgetData(title: "placeholder", description: "placeholderDesc"))
    }

    func snapshot(for configuration: ConfigurationAppIntent, in context: Context) async -> SimpleEntry {
        SimpleEntry(date: Date(), data: WidgetData(title: "snapshot", description: "snapshotDesc"))
    }
    
    func timeline(for configuration: ConfigurationAppIntent, in context: Context) async -> Timeline<SimpleEntry> {
        var entries: [SimpleEntry] = []
      
      let widgetData = UserDefaults(suiteName: "group.com.doretoluiz.widget.data");
      let title = widgetData?.string(forKey: "title");
      let description = widgetData?.string(forKey: "description");
      
        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, data: WidgetData(title: title ?? "defaultTitle", description: description ?? "defaultDesc"))
            entries.append(entry)
        }

        return Timeline(entries: entries, policy: .atEnd)
    }

//    func relevances() async -> WidgetRelevances<ConfigurationAppIntent> {
//        // Generate a list containing the contexts this widget is relevant in.
//    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let data: WidgetData
}

struct WidgetData {
  let title: String
  let description: String
}

struct widgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
        VStack {
          Text("Time:")
          Text(entry.date, style: .time)
          
          HStack {
            Text("Title: ")
            Text(entry.data.title)
          }
          
          HStack {
            Text("Description: ")
            Text(entry.data.description)
          }
        }
    }
}

struct widget: Widget {
    let kind: String = "widget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: kind, intent: ConfigurationAppIntent.self, provider: Provider()) { entry in
            widgetEntryView(entry: entry)
                .containerBackground(.fill.tertiary, for: .widget)
        }
        .configurationDisplayName("My First Widget")
        .description("Native Widget connected to an expo app")
    }
}
