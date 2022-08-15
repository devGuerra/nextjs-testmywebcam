import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import CookieConsent from "react-cookie-consent";

import Features from "../../components/Features";
import SEO from "../../components/SEO";
import { event } from "../../lib/gtag";

type Device = { label: string; deviceId: string };

const Home: NextPage = () => {
  const videoRef = React.useRef(null);

  const [loading, setLoading] = React.useState(true);
  const [permission, setPermission] = React.useState(false);
  const [cameraIsLoad, setCameraIsLoad] = React.useState(false);

  const [videoDevices, setVideoDevices] = React.useState<Device[] | []>([]);
  const [audioDevices, setAudioDevices] = React.useState<Device[] | []>([]);
  const [audioOutputDevices, setAudioOutDevices] = React.useState<
    Device[] | []
  >([]);

  const [volume, setVolume] = React.useState(0);

  const [selectedVideoDevice, setSelectedVideoDevice] = React.useState("");
  const [selectedAudioDevice, setSelectedAudioDevice] = React.useState("");
  const [selectedAudioOutputDevice, setSelectedAudioOutputDevice] =
    React.useState("");

  const getDataVideo = React.useCallback(() => {
    let audioOutPut: Device[] = [];
    let video: Device[] = [];
    let audioInput: Device[] = [];

    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      devices.forEach(function (device) {
        if (device.kind === "videoinput") {
          video.push(device);
          setVideoDevices(video);
        }
        if (device.kind === "audioinput") {
          audioInput.push(device);
          setAudioDevices(audioInput);
        }
        if (device.kind === "audiooutput") {
          audioOutPut.push(device);
          setAudioOutDevices(audioOutPut);
        }
      });
    });
  }, []);

  const getVideo = () => {
    console.log("init getVideo");
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "user" },
        audio: true,
      })
      .then((stream) => {
        console.log("getVideo success init stream", stream);
        let video: any = videoRef.current;

        video.srcObject = stream;
        video.play();
        video.volume = volume;

        getDataVideo();
        setLoading(false);
      })
      .catch((err) => {
        console.error("getVideo error:", err);
        console.error("getVideo error:", JSON.stringify(err));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const changeMicDevice = (device: string) => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "user" },
        audio: { deviceId: { exact: device } },
      })
      .then((stream) => {
        let video: any = videoRef.current;

        video.srcObject = stream;
        video.play();
        video.volume = volume;

        getDataVideo();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const changeSpeakerDevice = (device: string) => {
    let video: any = videoRef.current;

    video.setSinkId(device);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      getVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    let video: any = videoRef?.current;
    if (video) {
      video.volume = volume / 100;
    }
  }, [volume]);

  return (
    <>
      <SEO title="Home" />
      <Flex w="100vw" direction="column">
        <Flex
          bg={"gray.50"}
          align="center"
          w="100%"
          h="100%"
          direction="column"
          py={10}
        >
          <Heading
            display="inline-block"
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, teal.400, teal.600)"
            backgroundClip="text"
            mb={10}
          >
            My Test Webcam
          </Heading>
          {loading && (
            <Flex align="center" direction="column" py={20}>
              <Spinner size="xl" color="gray.900" mb={10} />
              <Text color="gray.800">Aguardando acesso da webcam</Text>
            </Flex>
          )}
          <Flex hidden={loading} flexDirection={["column", "row"]}>
            <Box
              maxW={640}
              w="100%"
              maxH={640}
              height="100%"
              borderRadius={5}
              overflow="hidden"
              invert={{}}
            >
              <video
                ref={videoRef}
                onLoadedData={(e) => setCameraIsLoad(true)}
              />
            </Box>

            <Flex
              ml={4}
              maxW="md"
              direction="column"
              justifyContent="space-between"
            >
              <Stack spacing={5}>
                <Box>
                  <Text color={"gray.600"}>Video</Text>
                  <Select
                    variant="outline"
                    color={"gray.500"}
                    borderColor="gray.500"
                    defaultValue={selectedVideoDevice}
                    onChange={(e) => setSelectedVideoDevice(e.target.value)}
                  >
                    {videoDevices?.map((device, index) => (
                      <option key={index} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box>
                  <Text color={"gray.600"}>Microphone</Text>
                  <Box my={2} px={2}>
                    <Slider
                      aria-label="slider-ex-4"
                      defaultValue={0}
                      value={volume}
                      onChange={setVolume}
                    >
                      <SliderTrack bg="red.100">
                        <SliderFilledTrack bg="tomato" />
                      </SliderTrack>
                      <SliderThumb boxSize={6} bg="red.600">
                        <Box color="tomato" />
                      </SliderThumb>
                    </Slider>
                  </Box>
                  <Select
                    color={"gray.500"}
                    borderColor="gray.500"
                    defaultValue={selectedAudioDevice}
                    onChange={(e) => {
                      setSelectedAudioDevice(e.target.value);
                      changeMicDevice(e.target.value);
                    }}
                  >
                    {audioDevices?.map((device, index) => (
                      <option key={index} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box>
                  <Text color={"gray.600"}>Speaker</Text>
                  <Select
                    color={"gray.500"}
                    borderColor="gray.500"
                    defaultValue={selectedAudioOutputDevice}
                    onChange={(e) => {
                      setSelectedAudioOutputDevice(e.target.value);
                      changeSpeakerDevice(e.target.value);
                    }}
                  >
                    {audioOutputDevices?.map((device, index) => (
                      <option key={index} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Stack>

              <Button colorScheme="red" size="lg" mt={4}>
                <a
                  href="https://amzn.to/3zTamJ1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    event({
                      category: "Button",
                      action: "Click",
                      label: "Buy new Webcam",
                      value: "https://amzn.to/3zTamJ1",
                    });
                  }}
                >
                  Comprar Webcam
                </a>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Features />
      </Flex>
      <CookieConsent
        location="bottom"
        buttonText="Claro!!"
        cookieName="cookiesAgree"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(accept) => {
          console.log("Cookie accepted", accept);
          window.gtag("consent", process.env.NEXT_PUBLIC_GA_ID!, {
            ad_storage: "granted",
            analytics_storage: "granted",
          });
        }}
      >
        Este site usa cookies para melhorar sua experiência.{" "}
        <span style={{ fontSize: "10px" }}>Você aceita ?</span>
      </CookieConsent>
    </>
  );
};

export default Home;
