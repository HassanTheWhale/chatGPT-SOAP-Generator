<?php
// require once so you can use the use statement bellow
require_once 'vendor/autoload.php';

// call the Client Class
use GuzzleHttp\Client;

function sendGBT($message)
{
    // make the connection with the api
    $client = new Client([
        'base_uri' => 'https://api.openai.com/v1/completions',
        'headers' => [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer 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',
        ],
    ]);

    // send a message to davinci
    $response = $client->post('', [
        'json' => [
            'model' => "text-davinci-003",
            'prompt' => $message,
            'max_tokens' => 400,
            'n' => 1,
            'temperature' => 0.7,
        ],
    ]);

    // return the result
    $result = json_decode((string) $response->getBody(), true);
    $generated_text = $result['choices'][0]['text'];
    return $generated_text;
}
?>