import {
    Avatar,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    Button,
    Tooltip,
    Box,
} from "@chakra-ui/react";

function withUnauthenticated(WrappedComponent) {
    return function () {
        return (
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Button className="popover-trigger channel-subscribe__btn">
                        <WrappedComponent />
                    </Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow backgroundColor={"#282828"} />
                        <PopoverHeader>
                            <Box>
                                <p>to subscribe you need to be authorized</p>
                            </Box>
                        </PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <span>Log in</span>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        );
    };
}

export default withUnauthenticated;
