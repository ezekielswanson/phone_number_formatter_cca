
# Phone Number Formatter for HubSpot Custom Coded Actions

A custom coded action script in HubSpot that formats phone numbers based on country code detection.

## Overview

This custom code action analyzes phone numbers, detects their country code, and reformats them into a standardized format specific to that country. It supports 100+ countries worldwide and handles various input formats.

## Features

- Automatic country code detection
- Country-specific formatting rules
- Handles dirty inputs (removes non-digit characters)
- Falls back to US/Canada format ("+1") for undetected countries
- Returns both formatted phone number and a boolean indicating if a valid phone number was found

## Implementation

### Input Fields

- `phone_number`: The raw phone number input to be formatted

### Output Fields

- `phone`: The formatted phone number with country code and proper spacing
- `hasPhone`: Boolean indicating if a valid phone number was detected

## Usage in HubSpot

1. Create a new Custom Coded Action in HubSpot
2. . Configure the input property to accept the phone number field
3. Paste the code from `phone_formatting.js` into the code editor
5. Map the output properties to hasPhone = true

## Supported Countries

The formatter supports 100+ countries including:
- US/Canada (+1)
- UK/England (+44)
- Australia (+61)
- Germany (+49)
- France (+33)
- Japan (+81)
- India (+91)
- And many more

## Error Handling

The formatter will:
- Return the original input if formatting fails
- Log detailed error information for troubleshooting
- Validate phone number length against country-specific standards

## License

[Add your license information here]
