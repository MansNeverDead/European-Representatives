#include <iostream>
#include <filesystem>
#include <vector>
#include <string>
#include <fstream>

namespace fs = std::filesystem;

void createCountryHTML(const std::string& filePath, const std::string& countryName) {
    std::ofstream htmlFile(filePath);
    if (htmlFile.is_open()) {
        htmlFile << "<!DOCTYPE html>\n";
        htmlFile << "<html lang=\"en\">\n";
        htmlFile << "<head>\n";
        htmlFile << "    <meta charset=\"UTF-8\">\n";
        htmlFile << "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
        htmlFile << "    <title>" << countryName << " - European Representative</title>\n";
        htmlFile << "    <style>\n";
        htmlFile << "        body { font-family: Arial, sans-serif; margin: 20px; }\n";
        htmlFile << "        h1 { color: #003399; }\n";
        htmlFile << "        .country-info { margin-top: 20px; }\n";
        htmlFile << "    </style>\n";
        htmlFile << "</head>\n";
        htmlFile << "<body>\n";
        htmlFile << "    <h1>" << countryName << "</h1>\n";
        htmlFile << "    <div class=\"country-info\">\n";
        htmlFile << "        <p>This page contains information about " << countryName << "'s representation in the EU.</p>\n";
        htmlFile << "        <!-- Add country-specific content here -->\n";
        htmlFile << "    </div>\n";
        htmlFile << "</body>\n";
        htmlFile << "</html>\n";
        htmlFile.close();
        std::cout << "Created HTML file: " << filePath << "\n";
    } else {
        std::cerr << "Failed to create HTML file: " << filePath << "\n";
    }
}

int main() {
    // List of all EU countries (27 members as of 2023)
    const std::vector<std::string> euCountries = {
        "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus",
        "Czechia", "Denmark", "Estonia", "Finland", "France",
        "Germany", "Greece", "Hungary", "Ireland", "Italy",
        "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands",
        "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
        "Spain", "Sweden"
    };

    // Your specified directory path
    const std::string baseDir = "C:/Users/User/Documents/Github Repositories/European-Representatives/Countries/";

    try {
        

        // Create folders and HTML files for each country
        for (const auto& country : euCountries) {
            std::string folderPath = baseDir + country;

            // Create HTML file
            std::string htmlFilePath = folderPath + "/" + country + ".html";
            createCountryHTML(htmlFilePath, country);
        }

        std::cout << "\nOperation completed. Created:\n";
        std::cout << "- " << euCountries.size() << " country folders\n";
        std::cout << "- " << euCountries.size() << " HTML files\n";
        std::cout << "Location: " << baseDir << "\n";
    }
    catch (const fs::filesystem_error& e) {
        std::cerr << "Filesystem error: " << e.what() << "\n";
        return 1;
    }
    catch (const std::exception& e) {
        std::cerr << "General error: " << e.what() << "\n";
        return 1;
    }

    return 0;
}