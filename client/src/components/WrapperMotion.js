import { motion, AnimatePresence} from "framer-motion";

const WrapperMotion = ({children}) => {
<AnimatePresence>
    <motion.div initial={{x:300, opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}}>
        {children}
    </motion.div>
</AnimatePresence>
}
export default WrapperMotion;